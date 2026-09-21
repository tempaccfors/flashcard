const C='fc-v1'; // bump this when you change index.html
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html']))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
