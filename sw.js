/* Opens cache and adds files */

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/restaurant.html",
        "/css/styles.css",
        "/js/",
        "/js/dbhelper.js",
        "js/main.js",
        "js/register.js",
        "js/restaurant_info.js"
      ])
      .catch(function(error) {
        // caches open failed
        console.log('Caches open failed' + error);
      });
    })
  );
});

/* Listens for fetch events */

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
