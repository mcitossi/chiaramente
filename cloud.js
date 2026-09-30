import {cleanBookName} from './book-name.js';
// Public project configuration only. Never use a service-role key in this app.
export const CHUNK_SIZE = 20 * 1024 * 1024;
export function chunkPaths(owner, id, count) {
 if (!/^[a-f0-9-]{36}$/i.test(owner) || !/^[a-f0-9-]{36}$/i.test(id) || !Number.isInteger(count) || count < 1 || count > 15) throw new Error('Riferimento PDF non valido.');
 return Array.from({length:count}, (_,i)=>`${owner}/${id}/${i}.part`);
}
export function validConfig(c) { return !!c && /^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(c.url) && typeof c.key==='string' && (c.key.startsWith('sb_publishable_') || (c.key.startsWith('eyJ') && (()=>{try{return JSON.parse(atob(c.key.split('.')[1])).role==='anon';}catch{return false;}})())); }
let config=null,session=null,member=null;
const deviceKey='chiaramente-private-device-v1';
function saveDevice(){try{if(session)localStorage.setItem(deviceKey,JSON.stringify({url:config.url,session}));else localStorage.removeItem(deviceKey);}catch{throw new Error('Il browser non può conservare l’accesso del dispositivo. Abilita il salvataggio locale.');}}
export async function initCloud(){
 try{const r=await fetch('./cloud-config.json',{cache:'no-store'});const c=await r.json();if(validConfig(c))config=c;}catch{}
 if(!config)return;
 try{const saved=JSON.parse(localStorage.getItem(deviceKey)||'null');const v=saved?.session;if(saved?.url===config.url&&v?.user?.is_anonymous===true&&/^[a-f0-9-]{36}$/i.test(v.user.id)&&typeof v.access_token==='string'&&typeof v.refresh_token==='string'&&Number.isFinite(v.expires_at)){session=v;await refreshMembership();}}catch(e){if(e.status===401){session=null;member=null;saveDevice();}}
}
export function cloudStatus(){return {configured:!!config,user:session?.user?.id||null,authorized:!!member,canUpload:member?.role==='uploader'};}
async function refreshMembership(){const members=await api('/rest/v1/library_members?select=role');member=members?.find(m=>['uploader','reader'].includes(m.role))||null;}
async function api(path,options={},auth=true){
 if(!config)throw new Error('La biblioteca condivisa deve ancora essere collegata.');
 if(auth&&!session)throw new Error('Accedi alla biblioteca condivisa.');
 if(auth&&session.expires_at<Date.now()/1000+60){const previous=session;const r=await api('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:JSON.stringify({refresh_token:session.refresh_token})},false);if(session!==previous)throw new Error('Accesso terminato.');session={...r,expires_at:Date.now()/1000+r.expires_in};saveDevice();}
 const r=await fetch(config.url+path,{...options,cache:'no-store',headers:{apikey:config.key,...(auth?{Authorization:`Bearer ${session.access_token}`} : {}),...(typeof options.body==='string'?{'Content-Type':'application/json'}:{}),...options.headers}});
 if(!r.ok){let message='';try{const detail=await r.json();if(detail.error_code==='anonymous_provider_disabled'||detail.msg?.includes('Anonymous'))message='anonymous-disabled';}catch{}const error=new Error();error.message=message?'La biblioteca va attivata nel pannello Supabase: abilita l’accesso anonimo.':r.status===401||r.status===403?'Questo dispositivo non è abilitato alla biblioteca.':r.status===404?'La biblioteca condivisa deve ancora essere attivata dal proprietario.':`Servizio non disponibile (${r.status}). Riprova.`;error.status=r.status;throw error;}
 if(options.binary)return r.blob();if(r.status===204||r.headers.get('content-length')==='0')return null;const text=await r.text();return text?JSON.parse(text):null;
}
export async function connectDevice(){
 if(!session){
  const result=await api('/auth/v1/signup',{method:'POST',body:JSON.stringify({data:{app:'ChiaraMente'}})},false);
  if(!result.access_token||!result.refresh_token||!result.user?.id||result.user.is_anonymous!==true)throw new Error('Accesso del dispositivo non disponibile.');
  session={...result,expires_at:Date.now()/1000+result.expires_in};saveDevice();
 }
 member=null;await refreshMembership();
}
export async function logoutCloud(){const pending=session?api('/auth/v1/logout',{method:'POST'}):null;session=null;member=null;saveDevice();await pending;}
export async function listShared(){if(!session||!member)return [];const rows=await api('/rest/v1/shared_books?select=*&order=added.desc');return rows.map(b=>({...b,name:cleanBookName(b.name),id:`shared:${b.id}`,remoteId:b.id,shared:true}));}
export async function uploadShared(file,pages,onProgress=()=>{}){
 if(!cloudStatus().canUpload)throw new Error('Solo chi gestisce la biblioteca può condividere PDF.');
 if(!file.size||file.size>300*1024*1024)throw new Error('Il limite per un PDF è 300 MB.');
 const id=crypto.randomUUID(),owner=session.user.id,paths=chunkPaths(owner,id,Math.ceil(file.size/CHUNK_SIZE)),uploaded=[];
 try{
  for(let i=0;i<paths.length;i++){await api(`/storage/v1/object/manuali/${paths[i]}`,{method:'POST',body:file.slice(i*CHUNK_SIZE,(i+1)*CHUNK_SIZE),headers:{'Content-Type':'application/octet-stream','x-upsert':'false'}});uploaded.push(paths[i]);onProgress(Math.round((i+1)/paths.length*100));}
  await api('/rest/v1/shared_books',{method:'POST',body:JSON.stringify({id,owner,name:cleanBookName(file.name),size:file.size,pages,chunks:paths.length})});
 }catch(e){if(uploaded.length)try{await api('/storage/v1/object/manuali',{method:'DELETE',body:JSON.stringify({prefixes:uploaded})});}catch{}throw e;}
}
export async function getShared(book){
 const user=session?.user?.id;const blobs=[];for(const p of chunkPaths(book.owner,book.remoteId,book.chunks))blobs.push(await api(`/storage/v1/object/authenticated/manuali/${p}`,{binary:true}));
 if(!session||session.user.id!==user)throw new Error('Accesso terminato.');const blob=new Blob(blobs,{type:'application/pdf'});if(blob.size!==book.size)throw new Error('Download incompleto. Riprova.');return {id:book.id,blob};
}
