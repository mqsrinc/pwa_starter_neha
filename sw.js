var cacheName = 'hello-pwa';
var filesToCache = [
'/',
'/tones',
'/comments',
'app.js',
'manifest.json',
'views/index.ejs',
'views/tones.ejs',
/views/comments.ejs',
'css/style.css',
'main.js'
];

self.addEventListner('install','function(e) {
e.waitUntil(caches.open(cacheName).then(function(cache){return cache.addAll(filesToCache);
})
);
});

self.addEventListner('fetch','function(e) {
e.respondWith(caches.match(e.request).then(function(response){
return response || fetch(e.request);
})
);
});
