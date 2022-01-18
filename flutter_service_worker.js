'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_6.part.js": "d2ddda99ec09b6d6e22d843570bdb140",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "e95b87045262eee4f8370ce0e5ecc652",
"main.dart.js_2.part.js": "486909966696171a5491f541e59100a4",
"assets/AssetManifest.json": "895ad7e74f0444166c41bbc6d76f2891",
"assets/NOTICES": "c48a87a15512e7e55ac8993976676200",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/intro.txt": "7f9e0471ab53faed6a803afe534281dd",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/logo_footer.png": "b3d9b572af36033a31659a18b837addf",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/icon/1001011_2_icon.png": "63825e6e8474e651bea7bff139c20af1",
"assets/images/icon/1001015_1_icon.png": "f3ceae5c789c6677ac76808aba478089",
"assets/images/icon/1001005_1_icon.png": "1b9fa52b0b60716ac0dab5d8b6a5d9ee",
"assets/images/icon/1001004_1_icon.png": "033aa47af310adb47ee013f47bf863d1",
"assets/images/icon/1001013_1_icon.png": "20a08e0dc87e20bf7678a6fd9a70554f",
"assets/images/icon/1001008_2_icon.png": "bae1e7ca14acfdfbdd209cc5946fade1",
"assets/images/icon/1001009_2_icon.png": "ca0f4e45aea54bc197f22927b3297b4a",
"assets/images/icon/1001002_1_icon.png": "d963050ef561f2bfa8bd804b0329e5e4",
"assets/images/icon/1001010_1_icon.png": "4ed8c9956f1f16c4c263455e2468a721",
"assets/images/icon/1001012_2_sd.png": "afb7613c847ddfdf0da92759b7fd8334",
"assets/images/icon/1001006_1_icon.png": "f37674e12724473eca8a050c2931fa10",
"assets/images/icon/1001008_1_icon.png": "6ef9b3a638b3713b681fd48388ab1c16",
"assets/images/icon/1001003_2_icon.png": "064202f8116f7246e2d4a84d1d25a708",
"assets/images/icon/1001014_2_icon.png": "e47a1154a2df5bf439f14b3385270b0e",
"assets/images/icon/1001006_2_icon.png": "f583927736dd12c1eafe25d38d1d6f90",
"assets/images/icon/1001003_1_icon.png": "dff3a7d665d44ca86e8878952fef8130",
"assets/images/icon/1001007_2_icon.png": "a13665b9f432352579264fb795c4d3e3",
"assets/images/icon/1001011_1_icon.png": "3a35c82bd20a73b3dd3276e6174aede0",
"assets/images/icon/1001005_2_icon.png": "0d0d2bae56210b7ec49997cf0de2ca05",
"assets/images/icon/1001001_1_icon.png": "7c7b967d772033f3017f6631bcfba4a7",
"assets/images/icon/1001016_1_icon.png": "cd2234316f4310916d2fc08d409e7466",
"assets/images/icon/1001009_1_icon.png": "3dd12b6a8810c22152b4067aa91ea100",
"assets/images/icon/1001016_2_icon.png": "d75cc0e93f0f01dea5a6f09f03a6b335",
"assets/images/icon/1001010_2_icon.png": "121645a42ac98fa9328ab346a77ace05",
"assets/images/icon/1001014_1_icon.png": "c4a43ad622da9cdc12535617d6e12507",
"assets/images/icon/1001004_2_icon.png": "1ee39757164984c385126c6c141fc702",
"assets/images/icon/1001013_2_icon.png": "1f0c75baf0820c61ab432ba6115245e2",
"assets/images/icon/1001015_2_icon.png": "c528772b352e591151adfb7bc20155b9",
"assets/images/icon/1001012_1_icon.png": "6f3758eff228ef69553149d336bd5dff",
"assets/images/icon/1001007_1_icon.png": "a2c1747328fa6b319027c46b3fff19d6",
"assets/images/icon/1001001_2_icon.png": "2b1ecc1c29ca1b5039b04079454bc2a4",
"assets/images/icon/1001002_2_icon.png": "afeced4de5c5f7b660aa23d5e6ceded4",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/bg_top.png": "855d3398ce210c817a797d1b93fcd0e5",
"assets/images/charInformation.json": "0f036e434f13e9938a9e1ec39969615f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"index.html": "0716dc148bccd44722de47aa46b6a34b",
"/": "0716dc148bccd44722de47aa46b6a34b",
"main.dart.js_12.part.js": "d214346c0296f3db83517de5ee959e95",
"version.json": "1d115db029c619818c06cb0f0d1f1e10",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_11.part.js": "5bfb3cd1244faa72463e8d98bde2ca84",
"main.dart.js_4.part.js": "0f4072492ccc01ee70edff398a61d388",
"main.dart.js_5.part.js": "94d69bc2aeb82343da01c45ddbb028d7",
"CNAME": "f6ca3e63c754f9eb6408ad13954f7c89",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_8.part.js": "29a8da60f6f8f1b8fcc6327930fbf5ff",
"main.dart.js_14.part.js": "2ac093eec082f049411d9a538b2fc871",
"main.dart.js_10.part.js": "206868cc5f7647272a1450ff199fb919",
"main.dart.js_13.part.js": "3182fd4822bdee9d93780c71a8a347c8",
"main.dart.js_1.part.js": "ff7f7a817987d2aa418a260387e1a3e0",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_15.part.js": "e85e549dff13d4043ea586a120e6bbce",
"main.dart.js": "91eef7aa5f4a84e03089d787384e185b",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_7.part.js": "1ad8931f8316a53f81b6a4d24d39eec1",
"main.dart.js_9.part.js": "76fa211285ed2ea6805950bd201f78d1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
