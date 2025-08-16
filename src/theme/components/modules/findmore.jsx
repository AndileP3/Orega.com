import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/findmore.module.css';

export function Component({ fieldValues }) {
  const { heading, message, buttonText } = fieldValues;

  return (
    <>
      <div className={styles.inlineContainer}>
        <h3>Heading:</h3>
        <p>This is a paragraph next to the heading.</p>
      </div>
      
      <section className={styles.findMoreSection}>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src='../../assets/findmore.mp4'
          controls
          autoPlay
          preload="metadata"
          muted
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.message}>{message}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default=" lose your company culture." />
    <TextField name="message" label="Message" default="At Orega, we believe that great things happen when people come together. So we create beautiful office space and deliver unbeatable service to help you unlock the full potential of your business." />
    <TextField name="buttonText" label="Button Text" default="Find out more" />
  </ModuleFields>
);

export const meta = {
  label: 'Find More Section',
};
