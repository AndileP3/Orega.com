import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/centeredTextBackground.module.css';

// Default background image
const DEFAULT_BG_URL = 'https://www.orega.com/hubfs/OregaBalloonStreet_LandlordCommunalArea3.jpg';

export function Component({ fieldValues }) {
  const { displayText, backgroundImage } = fieldValues;

  // Use selected image or fallback
  const bgImageUrl = backgroundImage?.src || DEFAULT_BG_URL;

  return (
    <section
      className={styles.heroSection}
      style={{
        backgroundImage: `linear-gradient(rgba(24, 25, 28, 0.7), rgba(21, 31, 46, 0.7)), url('${bgImageUrl}')`,
      }}
    >
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>{displayText || "CONTACT US"}</h1>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="displayText" label="Display Text" default="CONTACT US" />
    <ImageField name="backgroundImage" label="Background Image" />
  </ModuleFields>
);

export const meta = {
  label: 'Centered Text Background',
};
