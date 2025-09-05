import { useEffect } from "react"; import "@/styles/globals.css";

export default function App({ Component, pageProps }) { useEffect(() => { if ("serviceWorker" in navigator) { navigator.serviceWorker .register("/service-worker.js") .then(() => console.log("✅ Service Worker registered")) .catch((err) => console.error("❌ SW registration failed:", err)); } }, []);

return <Component {...pageProps} />; }

/* ======================= Notes for Setup

1. Place this file at: /pages/_app.js


2. Ensure you have /public/service-worker.js in place.


3. This registers the service worker automatically on load.


4. Combined with manifest.json + icons, your app is now a fully installable PWA. */




