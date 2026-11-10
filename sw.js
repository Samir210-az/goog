// Yalnız tətbiq kimi quraşdırma şərtini ödəyir, şəbəkəni keşləmir
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
