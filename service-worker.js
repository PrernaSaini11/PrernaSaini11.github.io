"use strict";var precacheConfig=[["/index.html","ec93f39d13c955b38ad4a8bb67881969"],["/static/css/main.1c7b147a.css","38508ffae907e3e538dce66dca542870"],["/static/js/main.cd1e7d92.js","ffe5af263ff96750475d5109e00c6881"],["/static/media/fa-brands-400.ae37590a.eot","ae37590ab05e9c625bcabf1759ab9dc2"],["/static/media/fa-brands-400.b5f5ef61.woff","b5f5ef6112d693b968ad9d1646eea529"],["/static/media/fa-brands-400.c09b5960.ttf","c09b5960237e462582aa7b66411e57d5"],["/static/media/fa-brands-400.c971847b.woff2","c971847be1cd6c17abca74025b4f36ae"],["/static/media/fa-brands-400.ee698d1f.svg","ee698d1f98a60900ef37577de1967ffc"],["/static/media/fa-regular-400.032ba2e0.woff2","032ba2e0f134a35ed87df1564936d352"],["/static/media/fa-regular-400.562010a4.woff","562010a46ef5216ac76a08c2ceb99985"],["/static/media/fa-regular-400.5df24ccf.svg","5df24ccfa0e1a2765724cd968b855418"],["/static/media/fa-regular-400.6bad016c.ttf","6bad016cd4efb36aa82618f55f0f660d"],["/static/media/fa-regular-400.d7de79ca.eot","d7de79cae74b02f2d377786656f1d816"],["/static/media/fa-solid-900.0e467838.svg","0e467838f7ee7b6cb069234be57d39d3"],["/static/media/fa-solid-900.10c304f1.eot","10c304f14cd2f6b6bed2ae7f574f03af"],["/static/media/fa-solid-900.3f07fd74.ttf","3f07fd745b951055c656cf27db9a31d5"],["/static/media/fa-solid-900.c9a328cc.woff","c9a328cc89d13b8959e710d82b4b40d1"],["/static/media/fa-solid-900.f9b85c94.woff2","f9b85c9463af7103b9b24bbbf09a06ed"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});