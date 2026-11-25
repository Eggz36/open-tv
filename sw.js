// Open TV service worker: app opens instantly and works with a spotty connection.
const SHELL='otv-shell-v1', DATA='otv-data';
const SHELL_FILES=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png',
  'https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(SHELL).then(c=>c.addAll(SHELL_FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('otv-shell')&&k!==SHELL).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET')return;
  // iptv-org database: show the saved copy right away, refresh it in the background
  if(u.hostname==='iptv-org.github.io'&&u.pathname.startsWith('/api/')){
    e.respondWith(caches.open(DATA).then(async c=>{
      const hit=await c.match(e.request);
      const net=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r}).catch(()=>hit);
      return hit||net;
    }));return;
  }
  // app files: network first so updates arrive, cache as fallback
  if(u.origin===location.origin||u.hostname==='cdn.jsdelivr.net'||u.hostname.endsWith('googleapis.com')||u.hostname.endsWith('gstatic.com')){
    e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cl=r.clone();caches.open(SHELL).then(c=>c.put(e.request,cl))}return r}).catch(()=>caches.match(e.request)));
  }
  // everything else (video streams, logos) goes straight to the network
});
