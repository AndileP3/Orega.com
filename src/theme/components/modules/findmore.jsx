import { ModuleFields, TextField, ImageField, VideoField } from '@hubspot/cms-components/fields';
import styles from '../../styles/findmore.module.css';

// Full URLs for your uploaded images
const STAR_URL = 'https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/Orega.com%20-%20media%20files/star.png';
const RATING_URL = 'https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/Orega.com%20-%20media%20files/rating.png';
const DEFAULT_VIDEO_URL = 'https://47574277.fs1.hubspotusercontent-na1.net/hubfs/47574277/Orega.com%20-%20media%20files/findmore.mp4';

export function Component({ fieldValues }) {
  const {
    heading,
    message,
    buttonText,
    star1,
    star2,
    star3,
    star4,
    star5,
    smallStar,
    video,
  } = fieldValues;

  // Use the editor-selected image if available, otherwise fallback to URL
  const s1 = star1?.src || STAR_URL;
  const s2 = star2?.src || STAR_URL;
  const s3 = star3?.src || STAR_URL;
  const s4 = star4?.src || STAR_URL;
  const s5 = star5?.src || RATING_URL;
  const ss = smallStar?.src || RATING_URL;
  const videoSrc = video?.src || DEFAULT_VIDEO_URL;

  return (
    <>
      <div className={styles.inlineContainer}>
        <p>Our customers say</p>
        <h3>
          Excellent
          <span className={styles.stars}>
            <img src={s1} alt="star" />
            <img src={s2} alt="star" />
            <img src={s3} alt="star" />
            <img src={s4} alt="star" />
            <img src={s5} alt="star" />
          </span>
        </h3>
        <p>4.7 out of 5 based on 109 reviews</p>
        <span className={styles.stars}>
          <img src={ss} alt="star" />
        </span>
        <h3>Trustpilot</h3>
      </div>

      <section className={styles.findMoreSection}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src={videoSrc}
            controls
            autoPlay
            preload="metadata"
            muted
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.message}>{message}</p>
          <button className={styles.button}>{buttonText}</button>
        </div>
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="Don't lose your company culture." />
    <TextField
      name="message"
      label="Message"
      default="At Orega, we believe that great things happen when people come together. So we create beautiful office space and deliver unbeatable service to help you unlock the full potential of your business."
    />
    <TextField name="buttonText" label="Button Text" default="Find out more" />

    {/* Video Field */}
    <VideoField name="video" label="Video" />
  </ModuleFields>
);

export const meta = {
  label: 'Find More Section',
};
