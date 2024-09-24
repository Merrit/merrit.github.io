import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageContent(): JSX.Element {
  return (
    // Return some text content for the homepage
    <section className={styles.content}>
      <div className={styles.container}>
        <p>
          I'm a self-taught software developer with a passion for technology,
          open source, and a desire to help people.
        </p>
        <p>
          In addition to coding, some of the things I enjoy are art, video games,
          animals, philosophy, and languages.
        </p>
        <p>
          I am proud to be a <a href="https://invent.kde.org/merritt">KDE Developer</a>.
          I believe open source software is very important, and I am so glad that our work
          contributes to the greater good and helps so many people around the world.
        </p>
      </div>
    </section>
  );
}
