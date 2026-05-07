// Service Worker para modo offline
// Cabo Verde 2026

const CACHE_NAME = 'cabo-verde-v1';
const PRECACHE = ['./', './index.html'];

// Instala y precachea los recursos básicos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Limpia caches antiguos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Estrategia de fetch
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Pasar tal cual API de JSONBin y Open-Meteo (la app gestiona offline por su cuenta)
  if (url.hostname.includes('jsonbin.io') ||
      url.hostname.includes('open-meteo.com')) {
    return;
  }

  // Solo cachear peticiones GET
  if (e.request.method !== 'GET') return;

  // Cache first, fallback a network. Cache nuevas respuestas correctas.
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(resp => {
        if (resp && resp.status === 200) {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then(cache => {
            try { cache.put(e.request, respClone); } catch (err) {}
          });
        }
        return resp;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
