const CACHE='nutrizione-studio-cdc89c4b8dd2';
const SHELL=['./','./index.html','./styles.css?v=cdc89c4b8dd2','./app.js?v=cdc89c4b8dd2','./engine.js?v=cdc89c4b8dd2','./course.js?v=cdc89c4b8dd2','./library.js?v=cdc89c4b8dd2','./book-name.js?v=cdc89c4b8dd2','./cloud.js?v=cdc89c4b8dd2','./icon.svg?v=cdc89c4b8dd2','./manifest.webmanifest?v=cdc89c4b8dd2','./vendor/pdf.mjs','./vendor/pdf.worker.mjs'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('nutrizione-studio-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 const scopePath=new URL(self.registration.scope).pathname;const relative='./'+url.pathname.slice(scopePath.length);
 if(!SHELL.some(asset=>asset.split('?')[0]===relative)&&!url.pathname.includes('/vendor/'))return;
 event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}return response;}).catch(()=>caches.match(event.request).then(cached=>cached||Response.error())));
});
