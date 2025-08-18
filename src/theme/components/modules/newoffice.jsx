import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/newoffice.module.css';

// Default background image URL
const DEFAULT_BG_URL = 'https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaEightyStrand_BreakoutSpace_Courtyard-1.jpg?width=2000&height=1125&name=OregaEightyStrand_BreakoutSpace_Courtyard-1.jpg';

export function Component({ fieldValues }) {
  const { heading, message, buttonText, backgroundImage } = fieldValues;

  // Use editor-selected image if available, otherwise fallback to default
  const bgImageUrl = backgroundImage?.src || DEFAULT_BG_URL;

  return (
    <section
      className={styles.newOfficeSection}
      style={{
        backgroundImage: `url('${bgImageUrl}')`,
      }}
    >
      <div className={styles.overlayBox}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.message}>{message}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="NEW: Eighty Strand, London" />
    <TextField
      name="message"
      label="Message"
      default="Located on the Strand, close to Covent Garden, 80 Strand London is a stunning grade II listed building with beautiful art deco features. Eighty Strand is located at one of our most premium addresses in London. Home to some of the UK’s leading brands, 80 Strand London is an ideal location to base your businesses office space."
    />
    <TextField name="buttonText" label="Button Text" default="Find out more" />
    <ImageField name="backgroundImage" label="Background Image" />
  </ModuleFields>
);

export const meta = {
  label: 'New Office Announcement',
};
