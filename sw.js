self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  let host = '';
  try { host = new URL(event.request.url).hostname; } catch (e) { return; }
  if (!host.endsWith('somafm.com')) return;
  event.respondWith(fetch(event.request, { referrerPolicy: 'no-referrer' }));
});
