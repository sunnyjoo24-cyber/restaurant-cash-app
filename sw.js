self.addEventListener("install", e => {
e.waitUntil(
caches.open("cash-app").then(cache => {
return cache.addAll(["index.html"]);
})
);
});