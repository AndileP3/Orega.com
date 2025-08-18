import { ModuleFields, TextField, RichTextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/twoColumnContent.module.css';

export function Component({ fieldValues }) {
  return (
    <section className={styles.container}>
       {/* Left Column */}
      <div className={styles.contentWrapper}>
       <div className={styles.rightColumn}>
    {fieldValues.right_image?.src ? (
      <img
        src={fieldValues.right_image.src}
        alt={fieldValues.right_image.alt || 'Content image'}
        className={styles.image}
      />
    ) : (
      <video
        src="https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/Orega.com%20-%20media%20files/video2-1.mp4" // 🔗 replace with your HubSpot file URL
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      />
    )}
  </div>

        
        
        {/* Right Column */}
        <div className={styles.leftColumn}>
          <h3 className={styles.smallHeading}>
            {fieldValues.left_heading || 'Unlock your full potential.'}
          </h3>
          <p className={styles.paragraph}>
            {fieldValues.left_paragraph ||
              "We pioneered our Management Agreement with the vision that partnership leads to success for all. We promise never to cut corners or prioritise style over substance. Instead, we invest in our spaces so you can unleash your productivity, communication & creativity ."}
          </p>
          <a href={fieldValues.button_url || '#'} className={styles.button}>
            {fieldValues.button_text || 'Find out more'}
          </a>
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
