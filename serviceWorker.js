self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offline-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html', // Replace with your main HTML file
        '/path/to/your/styles.css', // Replace with your CSS file
        '/path/to/your/script.js', // Replace with your JavaScript file
        // Add paths to other assets you want to cache for offline use
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
