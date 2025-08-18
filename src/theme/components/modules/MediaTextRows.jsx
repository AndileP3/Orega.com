import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/mediaTextRows.module.css';

export function Component({ fieldValues }) {
  const rows = [
    {
      heading: fieldValues.row1_heading,
      paragraph: fieldValues.row1_paragraph,
      button: fieldValues.row1_button,
      image: fieldValues.row1_image?.src || 'https://www.orega.com/hubfs/serviced-office-illustration.png',
      bgColor: fieldValues.row1_bgColor,
      accentImage: fieldValues.row1_accentImage?.src || 'https://www.orega.com/hubfs/Bg-pattern.svg',
    },
    {
      heading: fieldValues.row2_heading,
      paragraph: fieldValues.row2_paragraph,
      button: fieldValues.row2_button,
      image: fieldValues.row2_image?.src || 'https://www.orega.com/hubfs/virtual-offices.png',
      bgColor: fieldValues.row2_bgColor,
      accentImage: fieldValues.row2_accentImage?.src || 'https://www.orega.com/hubfs/Bg-pattern.svg',
    },
    {
      heading: fieldValues.row3_heading,
      paragraph: fieldValues.row3_paragraph,
      button: fieldValues.row3_button,
      image: fieldValues.row3_image?.src || 'https://www.orega.com/hubfs/virtual%20offices.png',
      bgColor: fieldValues.row3_bgColor,
      accentImage: fieldValues.row3_accentImage?.src || 'https://www.orega.com/hubfs/Bg-pattern.svg',
    },
  ];

  return (
    <section className={styles.container}>
      {rows.map((row, index) => (
        <div
          key={index}
          className={styles.row}
          style={{ backgroundColor: row.bgColor }}
        >
          <div className={styles.left}>
            <h2>{row.heading}</h2>
            <p>{row.paragraph}</p>
            <button>{row.button}</button>
          </div>
          <div className={styles.right}>
            {row.accentImage && (
              <img
                src={row.accentImage}
                alt="Accent"
                className={styles.accentImage}
              />
            )}
            {row.image && (
              <img src={row.image} alt={row.heading} className={styles.mainImage} />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Row 1 Fields */}
    <TextField name="row1_heading" label="Row 1 Heading" default="Serviced Offices" />
    <TextField name="row1_paragraph" label="Row 1 Paragraph" default="Propel your business forward by choosing our sound-insulated private managed office service for your next move. You'll have just enough privacy without making you feel hemmed in, and you can upsize and downsize as your business changes. Why commit to a long lease when you can switch to Orega?" />
    <TextField name="row1_button" label="Row 1 Button Text" default="Serviced offices" />
    <ImageField name="row1_image" label="Row 1 Main Image" />
    <ImageField name="row1_accentImage" label="Row 1 Accent Image" />
    <TextField name="row1_bgColor" label="Row 1 Background Color" default="#FFFFFF" />

    {/* Row 2 Fields */}
    <TextField name="row2_heading" label="Row 2 Heading" default="Meeting rooms" />
    <TextField name="row2_paragraph" label="Row 2 Paragraph" default="Convey a professional image from the get-go – book a purpose-built meeting room in easy-to-reach locations. Our Concierge team will take care of every need while you host a successful meeting." />
    <TextField name="row2_button" label="Row 2 Button Text" default="Meeting rooms" />
    <ImageField name="row2_image" label="Row 2 Main Image" />
    <ImageField name="row2_accentImage" label="Row 2 Accent Image" />
    <TextField name="row2_bgColor" label="Row 2 Background Color" default="#ffffffff" />

    {/* Row 3 Fields */}
    <TextField name="row3_heading" label="Row 3 Heading" default="Virtual offices" />
    <TextField name="row3_paragraph" label="Row 3 Paragraph" default="Enhance your business presence without the cost of a physical office. Our virtual office packages are affordable and support your business growth with recognised, prestigious addresses. Get the best of both worlds by combining a home office with a virtual office to create a professional impression or use our business addresses to test a new market." />
    <TextField name="row3_button" label="Row 3 Button Text" default="Virtual offices" />
    <ImageField name="row3_image" label="Row 3 Main Image" />
    <ImageField name="row3_accentImage" label="Row 3 Accent Image" />
    <TextField name="row3_bgColor" label="Row 3 Background Color" default="#ffffffff" />
  </ModuleFields>
);

export const meta = {
  label: 'Three Media Text Rows',
};
