import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import HeroContentIsland from '../islands/HeroContent?island'; // 👈 Import island here
import styles from '../../styles/hero.module.css';

export function Component({ fieldValues }) {
  const {
    backgroundImage,
  } = fieldValues;

  const backgroundImageUrl = backgroundImage?.url || 'https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaLimeStreet_Reception&BreakoutSpace2-2.jpg?width=1200&height=580&name=OregaLimeStreet_Reception&BreakoutSpace2-2.jpg';

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 100%), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Island component for content */}
      <Island
        module={HeroContentIsland}
        fieldValues={fieldValues}
      />

      <div className={styles.supportContainer}>
        <div className={styles.supportItem}>
          <strong>Need help? Call us today on</strong>
        </div>
        <div className={styles.supportItem}>
          <img
            src="https://www.orega.com/hubfs/phone-icon.svg"
            alt="Phone Icon"
            className={styles.phoneIcon}
          />
          <span>0800 840 5509</span>
        </div>
        <div className={styles.supportItem}>
          Our customer support team are on hand to answer any questions.
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Main Heading"
      default="Flexible workspace to unlock your potential."
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Stylish, flexible office space without the headaches of old-fashioned leases."
    />
    <TextField
      name="buttonText"
      label="CTA Button Text"
      default="Find"
    />
    <ImageField
      name="backgroundImage"
      label="Background Image"
      default=""
    />
  </ModuleFields>
);

export const meta = {
  label: 'Hero Section',
};
