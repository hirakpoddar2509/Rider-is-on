const CACHE_NAME = 'ridecomm-v1';
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'])).catch(() => {})
  );
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
