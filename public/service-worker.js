self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing SW', event);
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating SW', event);
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetching something...', event);
    event.respondWith(fetch(event.request));
});