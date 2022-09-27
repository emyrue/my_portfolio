import desktopBanner from '../images/banner2.png'
import mobileBanner from '../images/image_geometry_2.png'
import '../style/homepage.css';

function HomePage() {
  return (
    <section className="homepage-section">
      <div className="homepage-header">
        <h1>Emily Robertson</h1>
        <div className="header-paragraph">Hello! I am a software developer! I can help you build a product, feature or website. Take a look at my works. If you like what you see and have a project you need coded, don’t hesitate and contact me.</div>
      </div>
      <div className="homepage-banner">
        <img className="desktop-banner" src={desktopBanner} alt="banner" />
        <img className="mobile-banner" src={mobileBanner} alt="banner" />
      </div>
    </section>
  );
}

export default HomePage;