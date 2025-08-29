import { ModuleFields, TextField, RichTextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/twoColumnContent.module.css';

export function Component({ fieldValues }) {
  return (
    <section className={styles.container}>
      {/* Main Section Heading */}
      <h2 className={styles.mainHeading}>
        {fieldValues.main_heading || 'About Orega'}
      </h2>

      <div className={styles.contentWrapper}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h3 className={styles.smallHeading}>
            {fieldValues.left_heading || 'A new workspace experience, powered by Orega.'}
          </h3>
          <p className={styles.paragraph}>
            {fieldValues.left_paragraph ||
              "We offer stylish, flexible workspace without the headaches of old-fashioned leases. Over the last 20 years, we've provided our clients with modern serviced office spaces, run by brilliant teams and powered by supercharged technology. Today, we operate 26 centres office spaces in central locations across the UK, helping over 10,000 customers boost their productivity every day."}
          </p>
          <a href={fieldValues.button_url || '/contact'} className={styles.button}>
            {fieldValues.button_text || 'Get in touch'}
          </a>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {fieldValues.right_image?.src ? (
            <img
              src={fieldValues.right_image.src}
              alt={fieldValues.right_image.alt || 'Content image'}
              className={styles.image}
            />
          ) : (
            <img
              src="https://www.orega.com/hubfs/OregaMarkLane_BreakoutSpace_WithPeople3.jpg"
              alt="Orega office breakout space"
              className={styles.image}
            />
          )}
        </div>
      </div>
    </section>
  );
}

// ✅ Editable fields
export const fields = (
  <ModuleFields>
    <TextField name="main_heading" label="Main Heading" />
    <TextField name="left_heading" label="Left Column Heading" />
    <RichTextField name="left_paragraph" label="Left Column Paragraph" />
    <TextField name="button_text" label="Button Text" />
    <TextField name="button_url" label="Button URL" />
    <ImageField name="right_image" label="Right Column Image" />
  </ModuleFields>
);

export const meta = {
  label: 'Two Column Content Block',
};
