import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import ButtonIsland from '../islands/ButtonIsland?island';
import styles from '../../styles/newoffice.module.css';

// Default background image URL
const DEFAULT_BG_URL =
  'https://www.orega.com/hs-fs/hubfs/OregaLimeStreet_BreakoutSpace_SeatingArea-1.jpg?width=2000&name=OregaLimeStreet_BreakoutSpace_SeatingArea-1.jpg';

export function Component({ fieldValues }) {
  const { heading, message, buttonText, buttonLink, backgroundImage } = fieldValues;

  // Use editor-selected image if available, otherwise fallback to default
  const bgImageUrl = backgroundImage?.src || DEFAULT_BG_URL;

  return (
    <section
      className={styles.newOfficeSection2}
      style={{
        backgroundImage: `url('${bgImageUrl}')`,
      }}
    >
      <div className={styles.overlayBox2}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.message}>{message}</p>

        {/* Reusable ButtonIsland */}
        <Island
          module={ButtonIsland}
          fieldValues={{
            buttonText,
            buttonLink: "https://www.orega.com/hubfs/Resource%20page/Brochures%20-%20New%202020/Orega%20brochure%20-%20July%202021.pdf", // dynamic redirect link
          }}
        />
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="Our Brochure" />
    <TextField
      name="message"
      label="Message"
      default="Great things happen when you bring people together in a beautiful temporary office focused on helping your business to grow. That’s the Orega difference."
    />
    <TextField name="buttonText" label="Button Text" default="Download brochure" />
    <TextField name="buttonLink" label="Button Link" />
    <ImageField name="backgroundImage" label="Background Image" />
  </ModuleFields>
);

export const meta = {
  label: 'New Office Announcement',
};
