import styles from './ContentSection.module.css';

export default function ContentSection({ title, paragraphs }) {
    return (
      <section className={styles.section}>
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    );
  }