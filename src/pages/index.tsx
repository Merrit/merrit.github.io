import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageContent from '@site/src/components/HomepageContent';

import styles from './index.module.css';

function CircleImage({ src, alt }) {
  return (
    <div className={styles.circleImage}>
      <img src={src} alt={alt} />
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <CircleImage src="/images/profile-photo.jpg" alt="Photo of Kristen" />
        <p className="hero__subtitle">
          <em>Hi there!</em> My name is Kristen.
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Kristen McWilliam's personal website">
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
