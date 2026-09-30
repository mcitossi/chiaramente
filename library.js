import {cleanBookName} from './book-name.js';
let dbPromise;
function db(){if(!dbPromise)dbPromise=new Promise((resolve,reject)=>{const r=indexedDB.open('nutrizione-studio-library',1);r.onupgradeneeded=()=>{r.result.createObjectStore('files',{keyPath:'id'});r.result.createObjectStore('metadata',{keyPath:'id'});};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});return dbPromise;}
async function request(store,mode,fn){const d=await db();return new Promise((resolve,reject)=>{const tx=d.transaction(store,mode);let result;const r=fn(tx.objectStore(store));r.onsuccess=()=>result=r.result;tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('Operazione interrotta.'));});}
export async function listBooks(){return (await request('metadata','readonly',s=>s.getAll())).map(b=>({...b,name:cleanBookName(b.name)}));}
export function getBook(id){return request('files','readonly',s=>s.get(id));}
export async function removeBook(id){const d=await db();return new Promise((resolve,reject)=>{const tx=d.transaction(['files','metadata'],'readwrite');tx.objectStore('files').delete(id);tx.objectStore('metadata').delete(id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});}
let pdfModule;
export async function loadPdf(blob){if(!pdfModule){pdfModule=await import('./vendor/pdf.mjs');pdfModule.GlobalWorkerOptions.workerSrc=new URL('./vendor/pdf.worker.mjs',import.meta.url).href;}return pdfModule.getDocument({data:new Uint8Array(await blob.arrayBuffer()),cMapUrl:new URL('./vendor/cmaps/',import.meta.url).href,cMapPacked:true,standardFontDataUrl:new URL('./vendor/standard_fonts/',import.meta.url).href,wasmUrl:new URL('./vendor/wasm/',import.meta.url).href}).promise;}
export async function storeBook(id,file){
 if(file.size>300*1024*1024)throw new Error('Il limite per un PDF è 300 MB.');
 const head=new TextDecoder().decode(await file.slice(0,1024).arrayBuffer());if(!head.includes('%PDF-'))throw new Error('Seleziona un file PDF valido.');
 const pdf=await loadPdf(file);const pages=pdf.numPages;await pdf.destroy();
 const metadata={id,name:cleanBookName(file.name),size:file.size,pages,added:new Date().toISOString()};const d=await db();
 await new Promise((resolve,reject)=>{const tx=d.transaction(['files','metadata'],'readwrite');tx.objectStore('files').put({id,blob:file});tx.objectStore('metadata').put(metadata);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('Spazio insufficiente per salvare il manuale.'));});
 return metadata;
}
