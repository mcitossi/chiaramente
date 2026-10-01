import {courseRevision} from './course.js?v=e4cf62d0c791';
export function dayKey(date=new Date()) {return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function addDays(key,n){const [y,m,d]=key.split('-').map(Number);const date=new Date(y,m-1,d+n,12);return dayKey(date);}
export function initialState(){return {version:1,courseRevision,profile:{name:'',minutes:15,exam:'',course:'molecolari',academicYear:'2026/2027'},units:{},reviews:{},mistakes:{},activity:{},notes:{}};}
export function firstAvailable(course,state){const i=course.findIndex(u=>!state.units[u.id]?.completed);return i<0?course.length:i;}
export function canStudy(course,state,id){const i=course.findIndex(u=>u.id===id);return i>=0&&(!!state.units[id]?.completed||i<=firstAvailable(course,state));}
// Least recently answered questions come first; shuffle questions never answered.
export function selectQuestions(unit,state,count=3,random=Math.random){
 const seen=state.units[unit.id]?.seenQuestions||[];
 const unseen=unit.questions.filter(q=>!seen.includes(q.id));
 for(let i=unseen.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[unseen[i],unseen[j]]=[unseen[j],unseen[i]];}
 const previous=unit.questions.filter(q=>seen.includes(q.id)).sort((a,b)=>seen.indexOf(a.id)-seen.indexOf(b.id));
 return [...unseen,...previous].slice(0,Math.max(0,count));
}
export function recordAnswer(state,unit,question,correct,selected,day=dayKey()){
 const progress=state.units[unit.id]||{};
 state.units[unit.id]={...progress,seenQuestions:[...(progress.seenQuestions||[]).filter(id=>id!==question.id),question.id].slice(-unit.questions.length)};
 const old=state.reviews[question.id];const step=correct?Math.min((old?.step||0)+1,4):0;const interval=correct?[1,3,7,14,30][step]:1;
 state.reviews[question.id]={unitId:unit.id,questionId:question.id,step,due:addDays(day,interval),last:day};
 state.activity[day]=(state.activity[day]||0)+1;
 if(!correct)state.mistakes[question.id]={unitId:unit.id,questionId:question.id,selected,count:(state.mistakes[question.id]?.count||0)+1,last:day,resolved:false};
 else if(state.mistakes[question.id])state.mistakes[question.id].resolved=true;
}
export function completeQuiz(state,unit,score){const old=state.units[unit.id]||{};state.units[unit.id]={...old,best:Math.max(old.best||0,score),completed:!!old.completed||score>=2,attempts:(old.attempts||0)+1};}
export function dueReviews(course,state,day=dayKey()){const ids=new Set(course.filter(u=>state.units[u.id]?.started||state.units[u.id]?.completed).map(u=>u.id));return Object.values(state.reviews).filter(r=>ids.has(r.unitId)&&r.due<=day).sort((a,b)=>a.due.localeCompare(b.due));}
export function validateState(input,course){
 if(!input||input.version!==1||!input.profile||typeof input.profile!=='object')throw new Error('Backup non compatibile.');
 const s=initialState();s.profile={...s.profile,name:typeof input.profile.name==='string'?input.profile.name.slice(0,60):'',minutes:[10,15,20,30,45].includes(input.profile.minutes)?input.profile.minutes:15,exam:/^\d{4}-\d{2}-\d{2}$/.test(input.profile.exam||'')?input.profile.exam:'',course:['molecolari','alimenti'].includes(input.profile.course)?input.profile.course:'molecolari',academicYear:typeof input.profile.academicYear==='string'?input.profile.academicYear.slice(0,20):'2026/2027'};
 const questionIds=new Set(course.flatMap(u=>u.questions.map(q=>q.id)));const unitIds=new Set(course.map(u=>u.id));
 for(const u of course){const v=input.units?.[u.id];if(v&&typeof v==='object')s.units[u.id]={started:!!v.started,completed:!!v.completed,best:Number.isFinite(v.best)?Math.min(3,Math.max(0,v.best)):0,attempts:Number.isInteger(v.attempts)?Math.max(0,v.attempts):0,seenQuestions:[...new Set((Array.isArray(v.seenQuestions)?v.seenQuestions:Object.values(input.reviews||{}).filter(r=>r?.unitId===u.id).sort((a,b)=>String(a.last||'').localeCompare(String(b.last||''))).map(r=>r.questionId)).filter(id=>u.questions.some(q=>q.id===id)))].slice(-u.questions.length)};const note=input.notes?.[u.id];if(typeof note==='string')s.notes[u.id]=note.slice(0,20000);}
 for(const [id,v] of Object.entries(input.reviews||{})){if(questionIds.has(id)&&unitIds.has(v?.unitId)&&course.find(u=>u.id===v.unitId).questions.some(q=>q.id===id)&&id===v.questionId&&/^\d{4}-\d{2}-\d{2}$/.test(v.due||''))s.reviews[id]={unitId:v.unitId,questionId:id,step:Number.isInteger(v.step)?Math.min(4,Math.max(0,v.step)):0,due:v.due,last:typeof v.last==='string'?v.last:''};}
 for(const [id,v] of Object.entries(input.mistakes||{})){if(questionIds.has(id)&&unitIds.has(v?.unitId)&&course.find(u=>u.id===v.unitId).questions.some(q=>q.id===id))s.mistakes[id]={unitId:v.unitId,questionId:id,selected:typeof v.selected==='string'?v.selected.slice(0,500):'',count:Number.isInteger(v.count)?Math.max(1,v.count):1,last:typeof v.last==='string'?v.last:'',resolved:!!v.resolved};}
 for(const [day,count] of Object.entries(input.activity||{})){if(/^\d{4}-\d{2}-\d{2}$/.test(day)&&Number.isInteger(count)&&count>=0)s.activity[day]=count;}
 // Nuovi quiz non ereditano i punteggi del percorso precedente.
 if(input.courseRevision!==courseRevision){s.units={};s.reviews={};s.mistakes={};}
 for(const id of ['digestione','assorbimento','fibra','vitamine']){if(typeof input.notes?.[id]==='string')s.notes[id]=input.notes[id].slice(0,20000);}
 // Completamenti importati non possono creare buchi nel percorso.
 const added=new Set(['tecnologie-dna','fotosintesi','cromatina','replicazione','rna','traduzione','espressione','digestione','assorbimento','fibra','vitamine']);
 let gap=false;for(const u of course){if(added.has(u.id)&&!s.units[u.id]?.completed)continue;if(!s.units[u.id]?.completed)gap=true;else if(gap)s.units[u.id].completed=false;}
 return s;
}
