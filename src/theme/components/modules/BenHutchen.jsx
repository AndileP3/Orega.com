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
          <a href={fieldValues.button_url || '#'} className={styles.contactButton}>
            {fieldValues.button_text1 || '+447795 842497'}
          </a>
           <a href={fieldValues.button_url || '#'} className={styles.contactButton}>
            {fieldValues.button_text2 || 'ben.hutchen@orega.com'}
          </a>
           <a href={fieldValues.button_url || '#'} className={styles.contactButton}>
            {fieldValues.button_text3 || 'Connect on LinkedIn'}
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
          <a href={fieldValues.button_url || '#'} className={styles.button}>
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
