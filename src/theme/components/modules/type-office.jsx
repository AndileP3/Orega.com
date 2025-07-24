import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/typesOffices.module.css';

export function Component({ fieldValues }) {
  const officeTypes = [
    {
      title: fieldValues.office1_title,
      description: fieldValues.office1_description,
      button: fieldValues.office1_button,
      img: fieldValues.office1_img,
      bg: fieldValues.office1_bg,
    },
    {
      title: fieldValues.office2_title,
      description: fieldValues.office2_description,
      button: fieldValues.office2_button,
      img: fieldValues.office2_img,
      bg: fieldValues.office2_bg,
    },
    {
      title: fieldValues.office3_title,
      description: fieldValues.office3_description,
      button: fieldValues.office3_button,
      img: fieldValues.office3_img,
      bg: fieldValues.office3_bg,
    },
  ];

  return (
    <section className={styles.typesSection}>
      {officeTypes.map((office, index) => (
        <div
          key={index}
          className={styles.officeCard}
          style={{ '--bg-url': `url(${office.bg})` }}
        >
          <div className={styles.cardContent}>
          {/* icon hidden on hover via CSS */}
            <img src={office.img} alt={`${office.title} icon`} className={styles.officeImg} />
            <h3>{office.title}</h3>
            <p>{office.description}</p>
            <button className={styles.button}>{office.button}</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Serviced Offices */}
    <TextField name="office1_title" label="Office 1 Title" default="Serviced Offices" />
    <TextField
      name="office1_description"
      label="Office 1 Description"
      default="Free your employees from noise and interruption in design-led workspace that lifts their mood."
    />
    <TextField name="office1_button" label="Office 1 Button" default="Find out more" />
    <TextField
      name="office1_img"
      label="Office 1 Image"
      default="https://www.orega.com/hubfs/Icons/service-offices.svg"
    />
    <TextField
      name="office1_bg"
      label="Office 1 Background"
      default="https://www.orega.com/hs-fs/hubfs/Gracechurch-Street-Office-Space.png?width=630&height=580&name=Gracechurch-Street-Office-Space.png"
    />

    {/* Virtual Offices */}
    <TextField name="office2_title" label="Office 2 Title" default="Virtual Offices" />
    <TextField
      name="office2_description"
      label="Office 2 Description"
      default="Use a recognised UK business office address to boost your image without the cost of a physical office."
    />
    <TextField name="office2_button" label="Office 2 Button" default="Find out more" />
    <TextField
      name="office2_img"
      label="Office 2 Image"
      default="https://www.orega.com/hubfs/virtual-offices.svg"
    />
    <TextField
      name="office2_bg"
      label="Office 2 Background"
      default="https://www.orega.com/hs-fs/hubfs/virtual%20office%20chair.webp?width=630&height=580&name=virtual%20office%20chair.webp"
    />

    {/* Meeting Rooms */}
    <TextField name="office3_title" label="Office 3 Title" default="Meeting Rooms" />
    <TextField
      name="office3_description"
      label="Office 3 Description"
      default="Our meeting rooms are beautifully designed and include high-tech AV equipment and business-class Wi-Fi."
    />
    <TextField name="office3_button" label="Office 3 Button" default="Find out more" />
    <TextField
      name="office3_img"
      label="Office 3 Image"
      default="https://www.orega.com/hubfs/meeting-rooms.svg"
    />
    <TextField
      name="office3_bg"
      label="Office 3 Background"
      default="https://www.orega.com/hs-fs/hubfs/1.%20Meeting%20Room_Mountford.jpg?width=630&height=580&name=1.%20Meeting%20Room_Mountford.jpg"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Types of Offices',
};
