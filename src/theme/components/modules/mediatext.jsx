import { ModuleFields, TextField, ImageField, VideoField } from '@hubspot/cms-components/fields';
import styles from '../../styles/mediaTextSections.module.css';

// Full URLs for your uploaded media files on HubSpot
const SECTION1_IMAGE_URL = 'https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/Orega.com%20-%20media%20files/mediatext-img1.webp';
const SECTION2_VIDEO_URL = 'https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/Orega.com%20-%20media%20files/video2.mp4';
const SECTION3_IMAGE_URL = 'https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/mediatext-img2.webp';

export function Component({ fieldValues }) {
  const sections = [
    {
      mediaType: 'image',
      mediaSrc: fieldValues.section1_media?.src || SECTION1_IMAGE_URL,
      title: fieldValues.section1_title,
      description: fieldValues.section1_description,
      button: fieldValues.section1_button,
      reverse: false,
    },
    {
      mediaType: 'video',
      mediaSrc: fieldValues.section2_media?.src || SECTION2_VIDEO_URL,
      title: fieldValues.section2_title,
      description: fieldValues.section2_description,
      button: fieldValues.section2_button,
      reverse: true,
    },
    {
      mediaType: 'image',
      mediaSrc: fieldValues.section3_media?.src || SECTION3_IMAGE_URL,
      title: fieldValues.section3_title,
      description: fieldValues.section3_description,
      button: fieldValues.section3_button,
      reverse: false,
    },
  ];

  return (
    <section className={styles.mediaTextSection}>
      {sections.map((section, index) => (
        <div key={index} className={`${styles.row} ${section.reverse ? styles.reverse : ''}`}>
          <div className={styles.mediaColumn}>
            {section.mediaType === 'image' ? (
              <img src={section.mediaSrc} alt={section.title} className={styles.media} />
            ) : (
              <video className={styles.media} controls autoPlay muted>
                <source src={section.mediaSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className={styles.textColumn}>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <button className={styles.button}>{section.button}</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Section 1 - Image */}
    <TextField name="section1_title" label="Section 1 Title" default="It's your office space, not ours." />
    <TextField name="section1_description" label="Section 1 Description" default="You won't find our logo above the door in our flexible offices. Our bespoke design service will boost your brand and inspire your team." />
    <TextField name="section1_button" label="Section 1 Button" default="Find out more" />
    <ImageField name="section1_media" label="Section 1 Image" />

    {/* Section 2 - Video */}
    <TextField name="section2_title" label="Section 2 Title" default="Thoughtfully designed workspace" />
    <TextField name="section2_description" label="Section 2 Description" default="Our serviced offices aren't just expertly designed, they're well thought-out too. Do your best work in sound-proofed private offices with more desk space per person than the industry norm." />
    <TextField name="section2_button" label="Section 2 Button" default="Book a viewing" />
    <VideoField name="section2_media" label="Section 2 Video" />

    {/* Section 3 - Image */}
    <TextField name="section3_title" label="Section 3 Title" default="On-site concierge service" />
    <TextField name="section3_description" label="Section 3 Description" default="We offer second-to-none hospitality from brilliant people with a passion for delivering a business-class experience. Impress your guests and give your teams a VIP experience they won't forget." />
    <TextField name="section3_button" label="Section 3 Button" default="Explore more" />
    <ImageField name="section3_media" label="Section 3 Image" />
  </ModuleFields>
);

export const meta = {
  label: 'Media and Text Sections',
};
