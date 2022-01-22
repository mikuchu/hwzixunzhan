'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_6.part.js": "dae88f9a44977d6c0832c4bca35f36a2",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "e95b87045262eee4f8370ce0e5ecc652",
"main.dart.js_2.part.js": "02b7b798d0cc794dbd1ba9bbfe911586",
"assets/AssetManifest.json": "8dc26a0ba1b60ab4169d9704fb555c06",
"assets/assets/character.json": "08e4d2411ec417de145be4cdad620ea6",
"assets/assets/intro.txt": "7f9e0471ab53faed6a803afe534281dd",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/NOTICES": "f67f1f691ad4e9c8e1aa12d05df50fdb",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/images/1025_01_dlbg.png": "a83e7b06d569ac38a26b9c8acf1a78fa",
"assets/images/1022_01_dlbg.png": "4928dfeacbc1d44c9fa189b34f4959cf",
"assets/images/1030_01_dlbg.png": "0355a5473b3aede088f685d994c38b2b",
"assets/images/1008_01_dlbg.png": "ea51fb623d051e53c5282884d4a9d174",
"assets/images/1005_01_dlbg.png": "a803d6a6c9e4349ba33ecf27a5e16aa6",
"assets/images/1016_01_dlbg.png": "0d4fe46405e7b1469d9399a8aa723754",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/btn_menu_open.png": "ebcb912fd2ef256320813e4a569fd887",
"assets/images/1001_01_dlbg.png": "02e926370e04a3819a64c00c2c05d17f",
"assets/images/1003_01_dlbg.png": "3ee299d7621348f27e224a59443a532e",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/download.jpg": "1d2f3ef7750c46600c241f05c7c0b9ae",
"assets/images/logo_footer.png": "b3d9b572af36033a31659a18b837addf",
"assets/images/1009_01_dlbg.png": "aad733ab839dfcb84433167bd6a20068",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/images/1015_01_dlbg.png": "3d18b340a542301d7cbd28dd5ec3d4e4",
"assets/images/1014_01_dlbg.png": "266255516c19d7565177f03778f4f104",
"assets/images/DownloadCharaInfo.json": "e8d83799cf013a7cac2595bfdd1e73c7",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/1032_01_dlbg.png": "f9710b00c41ffefd84b21569696d1836",
"assets/images/1028_01_dlbg.png": "63fd8aa5e656348d4dcd189a767c01d1",
"assets/images/1012_01_dlbg.png": "ef481514d35fe6c9c917bb0effe7873b",
"assets/images/1002_01_dlbg.png": "aa6ffbf6ef22820f18b7de52b11c5c33",
"assets/images/1031_01_dlbg.png": "c7855974c8b6d3d50442733eda2547e1",
"assets/images/1997_01_dlbg.png": "e2ee9e54767a48e1729a2a3c87b7e8b9",
"assets/images/1018_01_dlbg.png": "5cc058fe83e9fda0a8b72270bcfe2752",
"assets/images/1013_01_dlbg.png": "a1cea8b84a67e9ea870e6cf807e173b1",
"assets/images/1023_01_dlbg.png": "b335e2ab7c1744e6e8f0205d946caa38",
"assets/images/1017_01_dlbg.png": "2b3aa905df99c736fbccd92d6fca1f4b",
"assets/images/1998_01_dlbg.png": "83e6237ea4f64dc147a0436b4c5ad374",
"assets/images/1027_01_dlbg.png": "52b7414908a41036c90a7b12c4dda8c2",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/1007_01_dlbg.png": "39d007ddf0acfde737f3ea297c13c3b4",
"assets/images/1011_01_dlbg.png": "7a7582bb5ab87a44651b067d1c0fc4bc",
"assets/images/1034_01_dlbg.png": "922845093717fb78199342213407c85c",
"assets/images/1033_01_dlbg.png": "f4e5ae028fb708c49f205db32fbb0a66",
"assets/images/bg_top.png": "855d3398ce210c817a797d1b93fcd0e5",
"assets/images/1006_01_dlbg.png": "844114aa38a714dae83ef32e68fca87a",
"assets/images/1026_01_dlbg.png": "7631753b221800dfa47dd5d86701ad79",
"assets/images/1024_01_dlbg.png": "2865a0b38e01fbe66e0f5aeead5cc010",
"assets/images/1004_01_dlbg.png": "c7e46519d3820a366892b7a15da15e19",
"assets/images/1010_01_dlbg.png": "93baeefb9fe9d6fa12f04e5d19567e0b",
"assets/images/1029_01_dlbg.png": "af3d57f31d674df4734805f8cf06aebd",
"assets/images/character.png": "8846646cbd43a0634fe9e948372bfe4e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"index.html": "301cb7d385bc984f8f64560fbf0eb856",
"/": "301cb7d385bc984f8f64560fbf0eb856",
"main.dart.js_21.part.js": "34ea5307406f3db45526d6cf930bcd8c",
"main.dart.js_16.part.js": "e5fc9293500c73a670e03ec1e5823381",
"main.dart.js_12.part.js": "9adbd1a41633521c56ccb344dd206aae",
"version.json": "1d115db029c619818c06cb0f0d1f1e10",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_20.part.js": "d29d1573c8ff1657a9770ff28ff520ed",
"main.dart.js_23.part.js": "0f5d242acf8f1a5ae85a8b7d903c08f7",
"main.dart.js_11.part.js": "47598472812a931df4d1d4678dd9d99e",
"main.dart.js_4.part.js": "dd1646c9dc367d97a5595097b1c9bc1b",
"main.dart.js_5.part.js": "7d2cc44d3a75179e7dc3c7661475fc45",
"CNAME": "f6ca3e63c754f9eb6408ad13954f7c89",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_8.part.js": "3e446ab2928bfe7c582f3ed073a1b0ae",
"main.dart.js_14.part.js": "0f6a9a03c2fdb99fc819b28987f5533b",
"main.dart.js_10.part.js": "0e8db5d2df1ed374dc059883496c1d45",
"main.dart.js_13.part.js": "2fa11b60e6697ae675f37c238d4802a8",
"main.dart.js_1.part.js": "0a8c43e8280c7c58770290b0255bb26f",
"main.dart.js_17.part.js": "3a78aacd1abe38f825f98c38cd1234d7",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_15.part.js": "e87ca5126fdc4d30ee550fee8d7d242e",
"main.dart.js": "ed7a67b92149f0101305e840d65dd85d",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_7.part.js": "55c3eeeb7f492c689e29760d99169c8b",
"main.dart.js_22.part.js": "d3880825a17639bbe8985942ea63f88c",
"main.dart.js_25.part.js": "2f3d813064b918d98f6d1999b0dcbdca",
"main.dart.js_18.part.js": "ee0aa689314c555b581213f129d3c6df",
"main.dart.js_9.part.js": "01b3d209da0307d782987dbbcf1d3e72"
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
