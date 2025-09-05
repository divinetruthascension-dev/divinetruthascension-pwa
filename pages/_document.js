import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Manifest & Theme Color */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4c1d95" />

        {/* App Icons */}
        <link rel="icon" href="/icon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon-512.png" />

        {/* SEO & Branding */}
        <meta name="application-name" content="DivineTruthAscension" />
        <meta
          name="description"
          content="A sanctuary for seekers, ascension, and divine wisdom."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
