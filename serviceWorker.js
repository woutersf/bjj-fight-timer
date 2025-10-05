const staticFightTimer = "fight-timer-v1"
const assets = [
  "./",
  "./index.html",
  "./js/nosleep.js",
  "./manifest.json",
  "./bell.mp3",
  "./bell2.mp3",
  "./alarmclock.mp3",
  "./beep-9.wav",
  "./TickingTimebombBB.ttf",
  "./android-chrome-192x192.png",
  "./android-chrome-512x512.png",
  "./icon-192x192.png",
  "./icon-512x512.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticFightTimer).then(cache => {
      return cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})