// pages/index.js
import Head from 'next/head';
import styles from '../styles/styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Divine Truth Ascension</title>
        <meta name="description" content="A PWA for Divine Truth Ascension" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Divine Truth Ascension</span>
        </h1>
        <p className={styles.description}>
          Your Next.js PWA is running successfully!
        </p>
      </main>
    </div>
  );
}
