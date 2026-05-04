const CACHE_NAME = 'codaai-pwa-v2'
const BASE_URL = new URL(self.registration.scope).pathname
const withBase = (path) => `${BASE_URL}${path}`.replace(/\/{2,}/g, '/')

const APP_SHELL = [
  '',
  'index.html',
  'manifest.json',
  'assets/icon/icon-1024.png',
  'assets/mascot/default.png',
  'assets/mascot/focus.png',
  'assets/splash/splash.png'
].map(withBase)

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone()
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy))
        return response
      })
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match(withBase('index.html')))
      )
  )
})
