const CACHE_NAME = "focusflash-v2";
const CORE_ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        await cache.addAll(CORE_ASSETS.map(toScopeUrl));
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
  const indexResponse = await fetch(toScopeUrl("./index.html"), { cache: "no-store" });
  const indexHtml = await indexResponse.clone().text();
  await cache.put(toScopeUrl("./index.html"), indexResponse);

  const assetUrls = findAssetUrls(indexHtml).map(toScopeUrl);
  const nestedAssets = new Set(assetUrls);

  await Promise.all(
    assetUrls.map(async (url) => {
      const response = await fetch(url);
      await cache.put(url, response.clone());
      if (url.endsWith(".js")) {
        const source = await response.text();
        findAssetUrls(source).map(toScopeUrl).forEach((assetUrl) => nestedAssets.add(assetUrl));
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
  return [...source.matchAll(/(?:\.\/)?assets\/[^"'`\\)]+/g)].map((match) => `./${match[0].replace(/^\.\//, "")}`);
}

function toScopeUrl(path) {
  return new URL(path, self.registration.scope).href;
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

      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match(toScopeUrl("./")) || caches.match(toScopeUrl("./index.html"));
          }
          return caches.match(event.request);
        });
    }),
  );
});
