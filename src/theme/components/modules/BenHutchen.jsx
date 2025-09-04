import { ModuleFields, TextField, RichTextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/benHutchen.module.css';

export function Component({ fieldValues }) {
  return (
    <>
      <h2 className={styles.smallHeading1}>{fieldValues.main_heading || 'Co-invest: Building Success Together'}</h2>
      <p className={styles.paragraph1}>{fieldValues.main_paragraph || 'At Orega, we pioneered the Management Agreement with a simple vision: true partnership leads to shared success. That’s why we co-invest alongside our Real Estate partners, sharing both risks and rewards. With Orega, you can trust that we\'re fully committed to your goals and invested in the success of your property.'}</p>
    <section className={styles.container}>

      <div className={styles.contentWrapper}>
        {/* Left Column */}
                <div className={styles.rightColumn}>
          {fieldValues.right_image?.src ? (
            <img
              src={fieldValues.right_image.src}
              alt={fieldValues.right_image.alt || 'Content image'}
              className={styles.image}
            />
          ) : (
            <img
              src="https://www.orega.com/hs-fs/hubfs/Ben%20V2-1.jpg?width=850&height=850&name=Ben%20V2-1.jpg"
              alt="Orega office breakout space"
              className={styles.image}
            />
          )}
        </div>

        {/* Right Column */}
               <div className={styles.leftColumn}>
          <h3 className={styles.smallHeading}>
            {fieldValues.left_heading || 'Connect with our Real Estate Director'}
          </h3>
          <p><strong>Ben Hutchen</strong></p>
          <p className={styles.paragraph}>
            {fieldValues.left_paragraph ||
              "Formerly Group Head of Property at Clarendon Business Centres, Ben has a strong track record at Avison Young and Strutt & Parker. With extensive UK flexible workspace and real estate experience, he is a firm believer in the transformative value of flex for both landlords and occupiers."}
          </p>
       <a href={fieldValues.button_url || "#"} className={styles.contactButton}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.53.73 3.88.73a1 1 0 011 1V20a1 1 0 01-1 1C10.29 21 3 13.71 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.25 2.68.73 3.88a1 1 0 01-.21 1.11l-2.4 2.4z" />
        </svg>
        {fieldValues.button_text1 || "+447795 842497"}
      </a>

      <a href={fieldValues.button_url || "#"} className={styles.contactButton}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        {fieldValues.button_text2 || "ben.hutchen@orega.com"}
      </a>

      <a href={fieldValues.button_url || "#"} className={styles.contactButton}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.7 0 5-2.2 5-5v-14c0-2.8-2.3-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7c1 0 1.7.7 1.7 1.7s-.7 1.7-1.7 1.7zm13.5 10.3h-3v-4.5c0-1.1 0-2.5-1.6-2.5s-1.9 1.2-1.9 2.4v4.6h-3v-9h2.9v1.2h.1c.4-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5.1v4.3z"/>
        </svg>
        {fieldValues.button_text3 || "Connect on LinkedIn"}
      </a>
        </div>
      </div>
    </section>


        <section className={styles.container2}>

      <div className={styles.contentWrapper}>
        {/* Left Column */}

                     <div className={styles.leftColumn}>
          <h3 className={styles.smallHeading2}>
            {fieldValues.left_heading || 'Supported by senior property figures'}
          </h3>
          <p className={styles.paragraph2}>
            {fieldValues.left_paragraph ||
              "Senior industry leader Andrew Hynard has joined Orega as a strategic advisor to our board. Formerly the Chief Executive of the Howard de Walden Estate - a £4.6 billion commercial and residential property portfolio in Marylebone - Andrew brings a wealth of experience and insight to our team."}
          </p>
          <a href={fieldValues.button_url || '/contact'} className={styles.button}>
            {fieldValues.button_text1 || 'Find out more'}
          </a>
        </div>
               
        {/* Right Column */}
         <div className={styles.rightColumn2}>
          {fieldValues.right_image?.src ? (
            <img
              src={fieldValues.right_image.src}
              alt={fieldValues.right_image.alt || 'Content image'}
              className={styles.image}
            />
          ) : (
            <img
              src="https://www.orega.com/hubfs/Senior%20figures%20v3.jpg"
              alt="Orega office breakout space"
              className={styles.image}
            />
          )}
        </div>

  
      </div>
    </section>
     </>
  );
}

// ✅ Editable fields
export const fields = (
  <ModuleFields>
    <TextField name="main_heading" label="Main Heading" />
    <TextField name="left_heading" label="Left Column Heading" />
    <RichTextField name="left_paragraph" label="Left Column Paragraph" />
    <TextField name="button_text1" label="Button Text" />
    <TextField name="button_text2" label="Button Text" />
    <TextField name="button_text3" label="Button Text" />
    <TextField name="button_url" label="Button URL" />
    <ImageField name="right_image" label="Right Column Image" />
  </ModuleFields>
);

export const meta = {
  label: 'Two Column Content Block',
};
