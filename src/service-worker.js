/**
 * Service worker that adds offline support
 * with a stale-while-revalidate strategy
 */

const cacheName = 'site-cache';

const onActivate = () => {
	// eslint-disable-next-line
	clients.claim().then(() => {
		console.log('sw activated and running');
	});
};

const onInstall = (event) => {
	event.waitUntil(caches.open(cacheName));
};

const onFetch = (event) => {
	const fetchAndPutInCache = (request) =>
		fetch(request).then(async (response) => {
			const cache = await caches.open(cacheName);
			cache.put(request, response.clone());
			return response;
		});

	const { request } = event;

	const response = caches.match(request).then((cacheResponse) => {
		if (cacheResponse) {
			fetchAndPutInCache(request)
				.then()
				.catch(() => {
					console.log(`Couldn't revalidate resource ${request.url}`);
				});

			return cacheResponse;
		}

		return fetchAndPutInCache(request);
	});

	event.respondWith(response);
};

self.skipWaiting();
self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('fetch', onFetch);
