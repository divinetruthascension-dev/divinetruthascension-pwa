// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA primary meta tags */}
        <meta name="application-name" content="Divine Truth Ascension" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="A spiritual social platform powered by Next.js PWA" />

        {/* PWA icons */}
        <link rel="icon" href="/icon-192.png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icon-192.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Fonts or external styles */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
