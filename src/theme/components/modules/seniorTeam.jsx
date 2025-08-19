import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/seniorTeam.module.css';

export function Component({ fieldValues }) {
  const team = [
    {
      image: fieldValues.image1?.src || "https://randomuser.me/api/portraits/men/32.jpg",
      name: fieldValues.name1 || "James Carter",
      role: fieldValues.role1 || "Chief Executive Officer",
      bio: fieldValues.bio1 || "James brings 20 years of leadership experience driving growth and innovation.",
    },
    {
      image: fieldValues.image2?.src || "https://randomuser.me/api/portraits/women/44.jpg",
      name: fieldValues.name2 || "Sophia Williams",
      role: fieldValues.role2 || "Chief Operating Officer",
      bio: fieldValues.bio2 || "Sophia is passionate about operational excellence and scaling global teams.",
    },
    {
      image: fieldValues.image3?.src || "https://randomuser.me/api/portraits/men/56.jpg",
      name: fieldValues.name3 || "Michael Lee",
      role: fieldValues.role3 || "Chief Technology Officer",
      bio: fieldValues.bio3 || "Michael oversees product engineering, delivering cutting-edge solutions.",
    },
    {
      image: fieldValues.image4?.src || "https://randomuser.me/api/portraits/women/65.jpg",
      name: fieldValues.name4 || "Emily Johnson",
      role: fieldValues.role4 || "Chief Marketing Officer",
      bio: fieldValues.bio4 || "Emily leads brand strategy and customer engagement across all channels.",
    },
    {
      image: fieldValues.image5?.src || "https://randomuser.me/api/portraits/men/71.jpg",
      name: fieldValues.name5 || "Daniel Brown",
      role: fieldValues.role5 || "Chief Financial Officer",
      bio: fieldValues.bio5 || "Daniel ensures financial health and sustainable growth strategies.",
    },
    {
      image: fieldValues.image6?.src || "https://randomuser.me/api/portraits/women/82.jpg",
      name: fieldValues.name6 || "Olivia Martin",
      role: fieldValues.role6 || "Head of People",
      bio: fieldValues.bio6 || "Olivia drives company culture and employee success initiatives.",
    },
  ];

  return (
    <section className={styles.container}>
      {/* Section Heading */}
      <div className={styles.headingWrapper}>
        <h2 className={styles.mainHeading}>
          {fieldValues.main_heading || 'Meet Our Senior Team'}
        </h2>
        <p className={styles.subHeading}>
          {fieldValues.sub_heading || 'The leaders guiding our vision and growth'}
        </p>
      </div>

      {/* Team Grid */}
      <div className={styles.grid}>
        {team.map((member, index) => (
          <div key={index} className={styles.card}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.teamImage}
            />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.bio}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ✅ Editable Fields
export const fields = (
  <ModuleFields>
    <TextField name="main_heading" label="Main Heading" default="Meet Our Senior Team" />
    <TextField name="sub_heading" label="Sub Heading" default="The leaders guiding our vision and growth" />

    <ImageField name="image1" label="Team Member 1 Image" />
    <TextField name="name1" label="Name 1" default="James Carter" />
    <TextField name="role1" label="Role 1" default="Chief Executive Officer" />
    <TextField name="bio1" label="Bio 1" default="James brings 20 years of leadership experience driving growth and innovation." />

    <ImageField name="image2" label="Team Member 2 Image" />
    <TextField name="name2" label="Name 2" default="Sophia Williams" />
    <TextField name="role2" label="Role 2" default="Chief Operating Officer" />
    <TextField name="bio2" label="Bio 2" default="Sophia is passionate about operational excellence and scaling global teams." />

    <ImageField name="image3" label="Team Member 3 Image" />
    <TextField name="name3" label="Name 3" default="Michael Lee" />
    <TextField name="role3" label="Role 3" default="Chief Technology Officer" />
    <TextField name="bio3" label="Bio 3" default="Michael oversees product engineering, delivering cutting-edge solutions." />

    <ImageField name="image4" label="Team Member 4 Image" />
    <TextField name="name4" label="Name 4" default="Emily Johnson" />
    <TextField name="role4" label="Role 4" default="Chief Marketing Officer" />
    <TextField name="bio4" label="Bio 4" default="Emily leads brand strategy and customer engagement across all channels." />

    <ImageField name="image5" label="Team Member 5 Image" />
    <TextField name="name5" label="Name 5" default="Daniel Brown" />
    <TextField name="role5" label="Role 5" default="Chief Financial Officer" />
    <TextField name="bio5" label="Bio 5" default="Daniel ensures financial health and sustainable growth strategies." />

    <ImageField name="image6" label="Team Member 6 Image" />
    <TextField name="name6" label="Name 6" default="Olivia Martin" />
    <TextField name="role6" label="Role 6" default="Head of People" />
    <TextField name="bio6" label="Bio 6" default="Olivia drives company culture and employee success initiatives." />
  </ModuleFields>
);

export const meta = {
  label: 'Senior Team Section',
};
