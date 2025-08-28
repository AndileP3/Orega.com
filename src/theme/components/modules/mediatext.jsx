import { ModuleFields, TextField, ImageField, VideoField } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import ButtonIsland1 from '../islands/ButtonIsland?island';
import ButtonIsland2 from '../islands/ButtonIsland?island';
import ButtonIsland3 from '../islands/ButtonIsland?island';
import styles from '../../styles/mediaTextSections.module.css';

const SECTION1_IMAGE_URL = 'https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/Orega.com%20-%20media%20files/mediatext-img1.webp';
const SECTION2_VIDEO_URL = 'https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/Orega.com%20-%20media%20files/video2.mp4';
const SECTION3_IMAGE_URL = 'https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/mediatext-img2.webp';

export function Component({ fieldValues }) {
  return (
    <section className={styles.mediaTextSection}>
      {/* Section 1 */}
      <div className={styles.row}>
        <div className={styles.mediaColumn}>
          <img
            src={fieldValues.section1_media?.src || SECTION1_IMAGE_URL}
            alt={fieldValues.section1_title}
            className={styles.media}
          />
        </div>
        <div className={styles.textColumn}>
          <h3>{fieldValues.section1_title}</h3>
          <p>{fieldValues.section1_description}</p>
          <Island
            module={ButtonIsland1}
            fieldValues={{
              buttonText: fieldValues.section1_button,
              buttonLink: fieldValues.section1_link || '/about',
            }}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.mediaColumn}>
          <video className={styles.media} controls autoPlay muted>
            <source
              src={fieldValues.section2_media?.src || SECTION2_VIDEO_URL}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.textColumn}>
          <h3>{fieldValues.section2_title}</h3>
          <p>{fieldValues.section2_description}</p>
          <Island
            module={ButtonIsland2}
            fieldValues={{
              buttonText: fieldValues.section2_button,
              buttonLink: fieldValues.section2_link || '/orega.com-services',
            }}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className={styles.row}>
        <div className={styles.mediaColumn}>
          <img
            src={fieldValues.section3_media?.src || SECTION3_IMAGE_URL}
            alt={fieldValues.section3_title}
            className={styles.media}
          />
        </div>
        <div className={styles.textColumn}>
          <h3>{fieldValues.section3_title}</h3>
          <p>{fieldValues.section3_description}</p>
          <Island
            module={ButtonIsland3}
            fieldValues={{
              buttonText: fieldValues.section3_button,
              buttonLink: fieldValues.section3_link || '/landlords',
            }}
          />
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Section 1 */}
    <TextField name="section1_title" label="Section 1 Title" default="It's your office space, not ours." />
    <TextField name="section1_description" label="Section 1 Description" default="You won't find our logo above the door in our flexible offices. Our bespoke design service will boost your brand and inspire your team." />
    <TextField name="section1_button" label="Section 1 Button" default="Find out more" />
    <TextField name="section1_link" label="Section 1 Button Link"/>
    <ImageField name="section1_media" label="Section 1 Image" />

    {/* Section 2 */}
    <TextField name="section2_title" label="Section 2 Title" default="Thoughtfully designed workspace" />
    <TextField name="section2_description" label="Section 2 Description" default="Our serviced offices aren't just expertly designed, they're well thought-out too. Do your best work in sound-proofed private offices with more desk space per person than the industry norm." />
    <TextField name="section2_button" label="Section 2 Button" default="Book a viewing" />
    <TextField name="section2_link" label="Section 2 Button Link"  />
    <VideoField name="section2_media" label="Section 2 Video" />

    {/* Section 3 */}
    <TextField name="section3_title" label="Section 3 Title" default="On-site concierge service" />
    <TextField name="section3_description" label="Section 3 Description" default="We offer second-to-none hospitality from brilliant people with a passion for delivering a business-class experience. Impress your guests and give your teams a VIP experience they won't forget." />
    <TextField name="section3_button" label="Section 3 Button" default="Explore more" />
    <TextField name="section3_link" label="Section 3 Button Link" />
    <ImageField name="section3_media" label="Section 3 Image" />
  </ModuleFields>
);

export const meta = {
  label: 'Media and Text Sections',
};
