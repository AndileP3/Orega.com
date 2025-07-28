import {
  ModuleFields,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import styles from '../../styles/featureGrid.module.css';

export function Component({ fieldValues }) {
  const tiles = [
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/bespoke-design-service.svg',
      title: fieldValues.tile1_title,
      description: fieldValues.tile1_description,
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/additional-soundproofing%5B1%5D.svg',
      title: fieldValues.tile2_title,
      description: fieldValues.tile2_description,
    },
    {
      type: 'image',
      image: fieldValues.tile3_image?.src || 'https://www.orega.com/hs-fs/hubfs/virtual-office-header-3.png?width=700&height=600&name=virtual-office-header-3.png',
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/wifi.svg',
      title: fieldValues.tile4_title,
      description: fieldValues.tile4_description,
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/communal-spaces.svg',
      title: fieldValues.tile5_title,
      description: fieldValues.tile5_description,
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/24-7-cctv.svg',
      title: fieldValues.tile6_title,
      description: fieldValues.tile6_description,
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/concierge-service.svg',
      title: fieldValues.tile7_title,
      description: fieldValues.tile7_description,
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/air-con.svg',
      title: fieldValues.tile8_title,
      description: fieldValues.tile8_description,
    },
    {
      type: 'image',
      image: fieldValues.tile9_image?.src || 'https://www.orega.com/hs-fs/hubfs/central-locations.jpg?width=700&height=600&name=central-locations.jpg',
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/it-and-telecoms.svg',
      title: fieldValues.tile10_title,
      description: fieldValues.tile10_description,
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/keyless-access-grey-1.svg',
      title: fieldValues.tile11_title,
      description: fieldValues.tile11_description,
    },
    {
      type: 'image',
      image: fieldValues.tile12_image?.src || 'https://www.orega.com/hs-fs/hubfs/PTAIT_20200504_5831.jpg?width=700&height=600&name=PTAIT_20200504_5831.jpg',
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/generous-desk-space-grey-1.svg',
      title: fieldValues.tile13_title,
      description: fieldValues.tile13_description,
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/barista-style-coffee-grey-1.svg',
      title: fieldValues.tile14_title,
      description: fieldValues.tile14_description,
    },
    {
      type: 'icon',
      icon: 'https://www.orega.com/hubfs/tech-enabled-meeting-rooms-grey-1.svg',
      title: fieldValues.tile15_title,
      description: fieldValues.tile15_description,
    },
  ];

  return (
    <section className={styles.featureGrid}>
      {tiles.map((tile, index) => (
        <div key={index} className={styles.tile}>
          {tile.type === 'icon' ? (
            <>
              <div className={styles.iconContent}>
                <img src={tile.icon} alt={tile.title} className={styles.icon} />
                <h4>{tile.title}</h4>
                <a className={styles.link}>More info</a>
              </div>
              <div className={styles.hoverDescription}>
                <p>{tile.description}</p>
              </div>
            </>
          ) : (
            <div
              className={styles.imageTile}
              style={{ backgroundImage: `url(${tile.image})` }}
            />
          )}
        </div>
      ))}
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Icon Tiles */}
    <TextField name="tile1_title" label="Tile 1 Title" default="Bespoke design service" />
    <TextField name="tile2_title" label="Tile 2 Title" default="Extra soundproofing" />
    <TextField name="tile4_title" label="Tile 4 Title" default="High speed wifi" />
    <TextField name="tile5_title" label="Tile 5 Title" default="Collaboration spaces" />
    <TextField name="tile6_title" label="Tile 6 Title" default="CCTV monitoring" />
    <TextField name="tile7_title" label="Tile 7 Title" default="Concierge service" />
    <TextField name="tile8_title" label="Tile 8 Title" default="Climate control" />
    <TextField name="tile10_title" label="Tile 10 Title" default="Supercharged connectivity" />
    <TextField name="tile11_title" label="Tile 11 Title" default="Keyless access" />
    <TextField name="tile13_title" label="Tile 13 Title" default="Generous desk space" />
    <TextField name="tile14_title" label="Tile 14 Title" default="Barista-style coffee" />
    <TextField name="tile15_title" label="Tile 15 Title" default="Tech-enabled meeting rooms" />

    <TextField name="tile1_description" label="Tile 1 Hover Description" default="Custom workspace design tailored to you." />
    <TextField name="tile2_description" label="Tile 2 Hover Description" default="Extra audio privacy in every room." />
    <TextField name="tile4_description" label="Tile 4 Hover Description" default="Blazing fast wireless connectivity." />
    <TextField name="tile5_description" label="Tile 5 Hover Description" default="Relax and meet in lounge areas." />
    <TextField name="tile6_description" label="Tile 6 Hover Description" default="Always-on security and monitoring." />
    <TextField name="tile7_description" label="Tile 7 Hover Description" default="Professional front-of-house support." />
    <TextField name="tile8_description" label="Tile 8 Hover Description" default="Temperature-controlled comfort." />
    <TextField name="tile10_description" label="Tile 10 Hover Description" default="Stay connected anywhere in the office." />
    <TextField name="tile11_description" label="Tile 11 Hover Description" default="No keys needed — just tech." />
    <TextField name="tile13_description" label="Tile 13 Hover Description" default="Spacious and ergonomic workspaces." />
    <TextField name="tile14_description" label="Tile 14 Hover Description" default="Freshly brewed specialty coffee." />
    <TextField name="tile15_description" label="Tile 15 Hover Description" default="Rooms equipped for hybrid meetings." />

    {/* Image Tiles */}
    <ImageField 
      name="tile3_image" 
      label="Tile 3 Image" 
      default={{
        src: 'https://www.orega.com/hs-fs/hubfs/virtual-office-header-3.png?width=700&height=600&name=virtual-office-header-3.png',
        width: 700,
        height: 600,
        alt: 'Virtual office'
      }} 
    />
    <ImageField 
      name="tile9_image" 
      label="Tile 9 Image" 
      default={{
        src: 'https://www.orega.com/hs-fs/hubfs/central-locations.jpg?width=700&height=600&name=central-locations.jpg',
        width: 700,
        height: 600,
        alt: 'Central locations'
      }} 
    />
    <ImageField 
      name="tile12_image" 
      label="Tile 12 Image" 
      default={{
        src: 'https://www.orega.com/hs-fs/hubfs/PTAIT_20200504_5831.jpg?width=700&height=600&name=PTAIT_20200504_5831.jpg',
        width: 700,
        height: 600,
        alt: 'Office space'
      }} 
    />
  </ModuleFields>
);

export const meta = {
  label: 'Feature Grid Section',
};