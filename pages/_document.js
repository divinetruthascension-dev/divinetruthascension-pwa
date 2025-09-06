// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4b0082" />

        {/* App Icons */}
        <link rel="icon" href="/icon-192.png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
