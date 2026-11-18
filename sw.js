/* Migration de l'ancienne installation WENARE, sans modifier les caches partagés. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil((async () => {
  const windows = await self.clients.matchAll({type: "window"});
  await self.registration.unregister();
  for (const client of windows) {
    const old = new URL(client.url);
    if (old.origin === self.location.origin && (old.pathname === "/WENARE" || old.pathname.startsWith("/WENARE/"))) {
      await client.navigate("https://timetogrowup.github.io/P-123-wenare/" + old.search + old.hash);
    }
  }
})()));
