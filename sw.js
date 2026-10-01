const CACHE='nutrizione-studio-e4cf62d0c791';
const SHELL=['./','./index.html','./styles.css?v=e4cf62d0c791','./app.js?v=e4cf62d0c791','./engine.js?v=e4cf62d0c791','./course.js?v=e4cf62d0c791','./library.js?v=e4cf62d0c791','./book-name.js?v=e4cf62d0c791','./cloud.js?v=e4cf62d0c791','./icon.svg?v=e4cf62d0c791','./manifest.webmanifest?v=e4cf62d0c791','./vendor/pdf.mjs','./vendor/pdf.worker.mjs'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('nutrizione-studio-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 const scopePath=new URL(self.registration.scope).pathname;const relative='./'+url.pathname.slice(scopePath.length);
 if(!SHELL.some(asset=>asset.split('?')[0]===relative)&&!url.pathname.includes('/vendor/'))return;
 event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}return response;}).catch(()=>caches.match(event.request).then(cached=>cached||Response.error())));
});
