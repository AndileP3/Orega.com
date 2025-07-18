
import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { RichText } from '@hubspot/cms-components';
import logo from '../../assets/logo.png';
import styles from '../../styles/getting-started.module.css';

export function Component({ fieldValues, hublParameters }) {
  const { src, alt, width, height } = fieldValues.logo;
  const { brandColors } = hublParameters;

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={src} alt={alt} width={width} height={height} className={styles.logo} />
      
        </div>
        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Spaces</a>
          <a href="#" className={styles.navLink}>Locations</a>
          <a href="#" className={styles.navLink}>Services</a>
          <a href="#" className={styles.contactNavLink}>Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} style={{
        backgroundColor: brandColors?.color,
        opacity: brandColors?.opacity,
      }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{fieldValues.headline || "Premium Office Spaces for Your Business"}</h1>
          <p className={styles.heroSubtitle}>Find the perfect workspace to inspire your team and impress your clients</p>
          
          {/* Search Form */}
          <div className={styles.searchForm}>
            <div className={styles.searchField}>
              <label>Choose a Location</label>
              <select className={styles.searchInput}>
                <option value="">Select location</option>
                <option value="new-york">New York</option>
                <option value="london">London</option>
                <option value="tokyo">Tokyo</option>
                <option value="dubai">Dubai</option>
              </select>
            </div>
            <div className={styles.searchField}>
              <label>Number of People</label>
              <select className={styles.searchInput}>
                <option value="">Select number</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11-20">11-20</option>
                <option value="20+">20+</option>
              </select>
            </div>
            <div className={styles.searchField}>
              <label>Select a Service</label>
              <select className={styles.searchInput}>
                <option value="">Select service</option>
                <option value="private-office">Private Office</option>
                <option value="coworking">Co-Working Space</option>
                <option value="meeting-room">Meeting Room</option>
                <option value="virtual-office">Virtual Office</option>
              </select>
            </div>
            <button className={styles.searchButton}>Find My Space</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Choose Orega?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏢</div>
            <h3>Prime Locations</h3>
            <p>Centrally located offices in major business districts</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🛠️</div>
            <h3>Fully Equipped</h3>
            <p>Move-in ready with all amenities included</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💰</div>
            <h3>Flexible Terms</h3>
            <p>Choose from daily, monthly or yearly rental options</p>
          </div>
        </div>
      </section>

      {/* Spaces Showcase */}
      <section className={styles.spaces}>
        <h2 className={styles.sectionTitle}>Our Office Spaces</h2>
        <div className={styles.spaceGrid}>
          <div className={styles.spaceCard}>
            <div className={styles.spaceImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2')" }}></div>
            <div className={styles.spaceInfo}>
              <h3>Executive Suite</h3>
              <p>From $1200/month</p>
            </div>
          </div>
          <div className={styles.spaceCard}>
            <div className={styles.spaceImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36')" }}></div>
            <div className={styles.spaceInfo}>
              <h3>Private Office</h3>
              <p>From $800/month</p>
            </div>
          </div>
          <div className={styles.spaceCard}>
            <div className={styles.spaceImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564069114553-7215e1ff1890')" }}></div>
            <div className={styles.spaceInfo}>
              <h3>Co-Working Space</h3>
              <p>From $300/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p>"Orega provided the perfect office solution for our growing team. The space is modern and the location is unbeatable."</p>
            <div className={styles.clientInfo}>
              <strong>Sarah Johnson</strong>
              <span>CEO, TechStart</span>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p>"The flexibility of short-term leases allowed us to scale up and down as needed without long-term commitments."</p>
            <div className={styles.clientInfo}>
              <strong>Michael Chen</strong>
              <span>Founder, GreenGrowth</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Find Your Perfect Office?</h2>
        <p>Schedule a tour today and experience our spaces firsthand</p>
        <button className={styles.ctaButton}>Book a Tour</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src={src} alt={alt} width={width} height={height} className={styles.logo} />
            <span className={styles.companyName}>Orega</span>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>Spaces</h4>
              <a href="#">Private Offices</a>
              <a href="#">Co-Working</a>
              <a href="#">Meeting Rooms</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Locations</a>
              <a href="#">Careers</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Support</h4>
              <a href="#">Contact</a>
              <a href="#">FAQs</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Orega. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const richTextFieldDefaultValue = `
  <div>
    <div>
      <span>
       Premium office spaces designed for productivity and collaboration
      </span>
      </div>
  </div>
`;

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: logo, height: 100, alt: 'Orega logo' }}
      resizable={true}
    />
    <TextField
      name="headline"
      label="Headline"
      default="Premium Office Spaces for Your Business"
    />
    <RichTextField
      name="gettingStarted"
      label="Getting Started"
      default={richTextFieldDefaultValue}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Orega Home Page',
};