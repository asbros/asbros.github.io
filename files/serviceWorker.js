var cacheAll = false;
var CACHE_NAME = 'webapk-cache';
var urlsToCache = [
	'https://techimodi.github.io/',
	'https://1.bp.blogspot.com/-cnW9B-Esgak/YMn3gbotU3I/AAAAAAAAAn8/lPXEhe07EBU1k6zE3wHwJ7lOwuH4pRQwwCLcBGAsYHQ/s0/Webp.net-resizeimage%2B%25289%2529.png',
	'https://1.bp.blogspot.com/-OyFreDg95Zg/YNb9z2jAnyI/AAAAAAAAArY/aW0g9I3AQ8cQSdw3NZ6vM5KWMQl4YyH9QCLcBGAsYHQ/s720/Screenshot_2021-06-26-15-42-16-08.jpg',
];
var urlsNotToCache = [
];

// Install Event
self.addEventListener('install', function(event) {
	console.log("[SW] install event: ",event);
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(
			function(cache) {
				console.log('[SW] Opened cache: ',cache);
				return cache.addAll(urlsToCache);
			}
		)
	);
});


// Fetch Event
self.addEventListener('fetch', function(event) {
	console.log("[SW] fetch event: ",event);
	event.respondWith(
		caches.match(event.request).then(
			function(response) {
				if (response) return response;
				else if (!cacheAll || urlsNotToCache.indexOf(event.request) !== -1) return fetch(event.request);
				else {
					fetch(event.request).then(
						function(response) {
							if(!response || response.status !== 200 || response.type !== 'basic') return response;
							var responseToCache = response.clone();
							caches.open(CACHE_NAME).then(
								function(cache) {
									cache.put(event.request, responseToCache);
								}
							);
							return response;
						}
					);
				}
			}
		)
	);
});
