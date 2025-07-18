import { ModuleFields, TextField, ImageField, ChoiceField } from '@hubspot/cms-components/fields';
import styles from '../../styles/hero.module.css';

export function Component({ fieldValues }) {
  const { 
    title,
    subtitle,
    backgroundImage,
    ctaText,
    ctaLink,
    overlayColor
  } = fieldValues;

  return (
    <section 
      className={styles.hero} 
      style={{ 
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <a href={ctaLink} className={styles.ctaButton}>{ctaText}</a>
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
      default="Premium Office Spaces"
      required={true}
    />
    <TextField
      name="subtitle"
      label="Subheading"
      default="Find the perfect workspace for your business"
    />
    <ImageField
      name="backgroundImage"
      label="Background Image"
      default="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
    />
    <TextField
      name="ctaText"
      label="Button Text"
      default="Explore Spaces"
    />
    <TextField
      name="ctaLink"
      label="Button Link"
      default="/spaces"
    />
    <ChoiceField
      name="overlayColor"
      label="Content Background"
      default="rgba(255,255,255,0.9)"
      choices={[
        { label: 'White (90%)', value: 'rgba(255,255,255,0.9)' },
        { label: 'White (80%)', value: 'rgba(255,255,255,0.8)' },
        { label: 'Light Gray (90%)', value: 'rgba(245,245,245,0.9)' }
      ]}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Hero Section',
  icon: 'image-text'
};