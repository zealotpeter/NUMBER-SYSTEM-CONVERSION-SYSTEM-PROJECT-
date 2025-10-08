const cacheName = 'base-converter-cache-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  // Add your icons, CSS, JS here if separate files exist
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
