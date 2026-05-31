const CACHE_NAME = "focusflash-v1";
const CORE_ASSETS = ["/", "/index.html", "/manifest.webmanifest", "/icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        await cache.addAll(CORE_ASSETS);
        await cacheBuildAssets(cache);
      })
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

async function cacheBuildAssets(cache) {
  const indexResponse = await fetch("/index.html", { cache: "no-store" });
  const indexHtml = await indexResponse.clone().text();
  await cache.put("/index.html", indexResponse);

  const assetUrls = findAssetUrls(indexHtml);
  const nestedAssets = new Set(assetUrls);

  await Promise.all(
    assetUrls.map(async (url) => {
      const response = await fetch(url);
      await cache.put(url, response.clone());
      if (url.endsWith(".js")) {
        const source = await response.text();
        findAssetUrls(source).forEach((assetUrl) => nestedAssets.add(assetUrl));
      }
    }),
  );

  await Promise.all(
    [...nestedAssets]
      .filter((url) => !assetUrls.includes(url))
      .map((url) => fetch(url).then((response) => cache.put(url, response))),
  );
}

function findAssetUrls(source) {
  return [...source.matchAll(/\/assets\/[^"'`\\)]+/g)].map((match) => match[0]);
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    }),
  );
});
