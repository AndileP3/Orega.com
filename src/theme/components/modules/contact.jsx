import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/contact.module.css';

export function Component({ fieldValues }) {
  const { heading, subheading } = fieldValues;

  return (
    <div className={styles.contactSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subheading}>{subheading}</p>
      </div>
      <form className={styles.form}>
        <div className={styles.field}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label>Message</label>
          <textarea rows="4" placeholder="Your message..." className={styles.textarea}></textarea>
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="Get In Touch" />
    <TextField name="subheading" label="Subheading" default="We’d love to hear from you!" />
  </ModuleFields>
);

export const meta = {
  label: 'Contact Section',
};
