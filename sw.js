// Unregister — clears all caches so the site always loads fresh
self.addEventListener('install', () => {
  caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
  self.skipWaiting();
});
self.addEventListener('activate', () => {
  caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
  self.clients.claim();
});
// No fetch listener — all requests go straight to network
