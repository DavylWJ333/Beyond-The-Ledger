/* Retirement & Legacy Planner, iPad app: keeps the planner and its PDF libraries on this device, so it works without
   internet. Build 1793172231-1a30. A new build changes CACHE: the next visit with internet installs it and the planner offers it. */
const CACHE = 'rlp-1793172231-1a30';
const FILES = ['./', './index.html', './html-to-image.js', './pdf-lib.min.js', './manifest.webmanifest', './icon-180.png', './icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('rlp-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then((c) => c.match(r, { ignoreSearch: true }).then((hit) => hit
    || fetch(r).then((res) => { if (res.ok) c.put(r, res.clone()); return res; }).catch(() => c.match('./index.html')))));
});
