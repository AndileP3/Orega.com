import { ModuleFields, TextField, RichTextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/unlock.module.css';

export function Component({ fieldValues }) {
  return (
    <section className={styles.container}>

      <div className={styles.contentWrapper}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h3 className={styles.smallHeading}>
            {fieldValues.left_heading || 'Unlock your portfolio\'s potential'}
          </h3>
          <p className={styles.paragraph}>
            {fieldValues.left_paragraph ||
              "Partner with Orega to transform your real estate and drive commercial success. Our Grade A spaces attract more tenants, increase occupancy and boost your income - turning your property into a high-performing asset."}
          </p>
          <a href={fieldValues.button_url || '/contact'} className={styles.button}>
            {fieldValues.button_text || 'Book your free evaluation'}
          </a>

          {/* 3 Small Images Below the Button */}
<div className={styles.imageRow}>
  <img
    src="https://www.orega.com/hs-fs/hubfs/4-Sep-12-2024-03-20-17-4294-PM.png?width=220&height=220&name=4-Sep-12-2024-03-20-17-4294-PM.png"
    alt="Small Image 1"
    className={styles.smallImage}
  />
  <img
    src="https://www.orega.com/hs-fs/hubfs/3-Sep-12-2024-03-20-17-6677-PM.png?width=220&height=220&name=3-Sep-12-2024-03-20-17-6677-PM.png"
    alt="Small Image 2"
    className={styles.smallImage}
  />
  <img
    src="https://www.orega.com/hs-fs/hubfs/2-Sep-12-2024-03-20-17-7631-PM.png?width=220&height=220&name=2-Sep-12-2024-03-20-17-7631-PM.png"
    alt="Small Image 3"
    className={styles.smallImage}
  />
</div>
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
              src="https://www.orega.com/hs-fs/hubfs/OregaBalloonStreet_LandlordCommunalArea.jpg?width=1024&height=1024&name=OregaBalloonStreet_LandlordCommunalArea.jpg"
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
