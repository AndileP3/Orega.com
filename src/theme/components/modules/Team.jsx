import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/seniorTeam.module.css';

export function Component({ fieldValues }) {
  const team = [
    {
      image: fieldValues.image1?.src || "https://www.orega.com/hs-fs/hubfs/Orega_ZachDouglas1_16122020%20copy.jpg?width=600&height=338&name=Orega_ZachDouglas1_16122020%20copy.jpg",
      name: fieldValues.name1 || "Zach Douglas",
      role: fieldValues.role1 || "Executive Chairman and Co-Founder",
      bio: fieldValues.bio1 || "Zach is the Executive Chairman and co-founder of Orega. Previously, Zach held roles as a salesperson in the flexible workspace industry before he and co-founder, Paul Finch, established Orega in 2000, pioneering the management agreement model. Zach oversees the Orega portfolio of 26 centres, with the vision to roll out our unique operating model to prime business locations across the UK. Outside of work, Zach is a father of two and has a keen interest in music and cycling.",
    },
    {
      image: fieldValues.image2?.src || "https://www.orega.com/hs-fs/hubfs/Paul%20Finch%20headshot_B%26W_Nov21%20copy.jpg?width=600&height=338&name=Paul%20Finch%20headshot_B&W_Nov21%20copy.jpg",
      name: fieldValues.name2 || "Paul Finch",
      role: fieldValues.role2 || "Co-Founder",
      bio: fieldValues.bio2 || "Paul is the co-founder of Orega, establishing the company in 2000 alongside Zach Douglas. Prior to Orega, Paul was a Key Account Director within the furniture industry before entering the flexible workspace industry. Paul and co-founder Zach Douglas pioneered the management agreement model in 2000 to provide innovative office solutions across the UK. Outside of Orega, Paul is a qualified pilot, and he enjoys spending time with his two children and skiing.",
    },
    {
      image: fieldValues.image3?.src || "https://www.orega.com/hs-fs/hubfs/PTAIT_20240429_614222.jpg?width=600&height=338&name=PTAIT_20240429_614222.jpg",
      name: fieldValues.name3 || "Alan Pepper",
      role: fieldValues.role3 || "Chief Executive Officer",
      bio: fieldValues.bio3 || "Alan has 20 years experience of delivering profitable growth in the flexible workspace sector. His career spans leadership roles in private equity-backed and AIM-listed businesses, guiding significant expansions, fundraisings and corporate development. As CEO of Avanta, he oversaw the delivery of industry-leading customer service. At essensys, Alan was pivotal as CFO & COO for five years.  Alan is married with three teenage daughters.  Outside of Orega he is a keen sailor and skier and, occasional golfer. ",
    },
    {
      image: fieldValues.image4?.src || "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/David%20Kinnaird%20-%20Copy.jpg?width=600&height=338&name=David%20Kinnaird%20-%20Copy.jpg",
      name: fieldValues.name4 || "David Kinnaird",
      role: fieldValues.role4 || "Chief Operations Officer",
      bio: fieldValues.bio4 || "David Kinnaird brings over 25 years of expertise in the flexible workspace industry to his role as Chief Operations Officer at Orega. Prior to joining Orega, David spearheaded the U.S. expansion at essensys as Chief Customer Officer, where he honed his skills in operations, technology, and customer experience. His extensive career also includes senior leadership roles at Avanta and MWB Business Exchange, giving him a deep understanding of the evolving workspace landscape.",
    },
    {
      image: fieldValues.image5?.src || "https://www.orega.com/hs-fs/hubfs/Chris%20Toon%20headshot%20copy.jpg?width=600&height=338&name=Chris%20Toon%20headshot%20copy.jpg",
      name: fieldValues.name5 || "Christopher Toon",
      role: fieldValues.role5 || "Chief Financial Officer",
      bio: fieldValues.bio5 || "Chris joined Orega in 2021 as Chief Financial Officer, managing all financial actions for the company. Chris is a qualified and chartered accountant. He brings with him over fifteen years’ experience previously working in various financial roles for Terra Firma, Labtech, Thomas Cook and KPMG. Chris is married with two young children. He enjoys spending his free time with his family, cooking and playing tennis.",
    },
    {
      image: fieldValues.image6?.src || "https://www.orega.com/hs-fs/hubfs/1636975278545.jpeg?width=600&height=338&name=1636975278545.jpeg",
      name: fieldValues.name6 || "Ben Hutchen",
      role: fieldValues.role6 || "Real Estate Director",
      bio: fieldValues.bio6 || "Ben joined Orega in November 2021. He is responsible for managing and growing our real estate portfolio. Previously, Ben was Group head of Property at Clarendon Business Centres, with a strong track record at Avison Young and Strutt & Parker before that. He has extensive experience in the UK flexible workspace and wider Real Estate sector. He is a passionate believer in the value that flex brings to landlords and occupiers alike - and that 'the time is now' for our sector. ",
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

// ✅ Editable Fields with defaults from team[]
export const fields = (
  <ModuleFields>
    <TextField name="main_heading" label="Main Heading" default="Meet Our Senior Team" />
    <TextField name="sub_heading" label="Sub Heading" default="The leaders guiding our vision and growth" />

    <ImageField name="image1" label="Team Member 1 Image" />
    <TextField name="name1" label="Name 1" default="Zach Douglas" />
    <TextField name="role1" label="Role 1" default="Executive Chairman and Co-Founder" />
    <TextField name="bio1" label="Bio 1" default="Zach is the Executive Chairman and co-founder of Orega. Previously, Zach held roles as a salesperson in the flexible workspace industry before he and co-founder, Paul Finch, established Orega in 2000, pioneering the management agreement model. Zach oversees the Orega portfolio of 26 centres, with the vision to roll out our unique operating model to prime business locations across the UK. Outside of work, Zach is a father of two and has a keen interest in music and cycling." />

    <ImageField name="image2" label="Team Member 2 Image" />
    <TextField name="name2" label="Name 2" default="Paul Finch" />
    <TextField name="role2" label="Role 2" default="Co-Founder" />
    <TextField name="bio2" label="Bio 2" default="Paul is the co-founder of Orega, establishing the company in 2000 alongside Zach Douglas. Prior to Orega, Paul was a Key Account Director within the furniture industry before entering the flexible workspace industry. Paul and co-founder Zach Douglas pioneered the management agreement model in 2000 to provide innovative office solutions across the UK. Outside of Orega, Paul is a qualified pilot, and he enjoys spending time with his two children and skiing." />

    <ImageField name="image3" label="Team Member 3 Image" />
    <TextField name="name3" label="Name 3" default="Alan Pepper" />
    <TextField name="role3" label="Role 3" default="Chief Executive Officer" />
    <TextField name="bio3" label="Bio 3" default="Alan has 20 years experience of delivering profitable growth in the flexible workspace sector. His career spans leadership roles in private equity-backed and AIM-listed businesses, guiding significant expansions, fundraisings and corporate development. As CEO of Avanta, he oversaw the delivery of industry-leading customer service. At essensys, Alan was pivotal as CFO & COO for five years.  Alan is married with three teenage daughters.  Outside of Orega he is a keen sailor and skier and, occasional golfer. " />

    <ImageField name="image4" label="Team Member 4 Image" />
    <TextField name="name4" label="Name 4" default="David Kinnaird" />
    <TextField name="role4" label="Role 4" default="Chief Operations Officer" />
    <TextField name="bio4" label="Bio 4" default="David Kinnaird brings over 25 years of expertise in the flexible workspace industry to his role as Chief Operations Officer at Orega. Prior to joining Orega, David spearheaded the U.S. expansion at essensys as Chief Customer Officer, where he honed his skills in operations, technology, and customer experience. His extensive career also includes senior leadership roles at Avanta and MWB Business Exchange, giving him a deep understanding of the evolving workspace landscape." />

    <ImageField name="image5" label="Team Member 5 Image" />
    <TextField name="name5" label="Name 5" default="Christopher Toon" />
    <TextField name="role5" label="Role 5" default="Chief Financial Officer" />
    <TextField name="bio5" label="Bio 5" default="Chris joined Orega in 2021 as Chief Financial Officer, managing all financial actions for the company. Chris is a qualified and chartered accountant. He brings with him over fifteen years’ experience previously working in various financial roles for Terra Firma, Labtech, Thomas Cook and KPMG. Chris is married with two young children. He enjoys spending his free time with his family, cooking and playing tennis." />

    <ImageField name="image6" label="Team Member 6 Image" />
    <TextField name="name6" label="Name 6" default="Ben Hutchen" />
    <TextField name="role6" label="Role 6" default="Real Estate Director" />
    <TextField name="bio6" label="Bio 6" default="Ben joined Orega in November 2021. He is responsible for managing and growing our real estate portfolio. Previously, Ben was Group head of Property at Clarendon Business Centres, with a strong track record at Avison Young and Strutt & Parker before that. He has extensive experience in the UK flexible workspace and wider Real Estate sector. He is a passionate believer in the value that flex brings to landlords and occupiers alike - and that 'the time is now' for our sector. " />
  </ModuleFields>
);

export const meta = {
  label: 'Senior Team Section',
};
