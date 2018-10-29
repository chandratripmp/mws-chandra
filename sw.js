var staticCacheName = 'mws-chandra-static-v13';

self.addEventListener('install', function (event) {
  console.log("installing...");

  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/project1/',
        '/project1/index.html',
        '/project2/',
        '/project2/index.html',
        '/project3/',
        '/project3/index.html',
        '/project4/',
        '/project4/index.html',
        '/js/add2numbers.js',
        '/js/main.js',
        '/js/fetch.js',
        '/js/map.js',
        '/css/style.css',
        '/css/style-layout.css',
        '/css/fontawesome.css',
        '/data/data.json',
        '/img/icon.png',
        '/img/ava.jpg',
        '/img/tugu-malang.jpg',
        '/img/batu-bengkung.jpg',
        '/img/jodipan.jpg',
        '/img/labirin.jpg',
        '/img/mnp.jpg',
        '/img/omah-kayu.jpg',
        '/img/selorejo.jpg',
        '/img/sumber-sira.jpg',
        'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-brands-400.eot',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-brands-400.eot?#iefix',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-brands-400.woff2',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-brands-400.woff',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-brands-400.ttf',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-brands-400.svg#fontawesome',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.eot',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.eot?#iefix',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.woff2',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.woff',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.ttf',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.svg#fontawesome',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-solid-900.eot',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-solid-900.eot?#iefix',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-solid-900.woff2',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-solid-900.woff',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-solid-900.ttf',
        'https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-solid-900.svg#fontawesome'
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log("activating...")

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith('mws-chandra-') && cacheName != staticCacheName;
        }).map(function (cacheName) {
          console.log(cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  // event.respondWith(
  //   caches.match(event.request).then(function (response) {
  //     console.log("fetching...");
  //     console.log(event.request.url);
  //     return response || fetch(event.request);
  //   })
  // );

  // event.respondWith(
  //   caches.open(staticCacheName).then(function (cache) {
  //     cache.match(event.request).then(function (response) {
  //       return response || fetch(event.request);
  //     })
  //   })
  // );

  event.respondWith(
    caches.match(event.request).then(function (resp) {
      // if it's not in the cache, server the regular network request. And save it to the cache
      return resp || fetch(event.request).then(function (response) {
        return caches.open(staticCacheName).then(function (cache) {
          cache.put(event.request, response.clone())
          return response
        })
      })
    })
  );
});