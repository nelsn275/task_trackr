import './PartialShowcase.css';
import Header from './Header';
import HorizontalMenu from './HorizontalMenu';
import HamburgerMenu from './HamburgerMenu';
import SignInForm from './SignInForm';
import RegistrationForm from './RegistrationForm';
import Footer from './Footer';

function PartialShowcase() {
  return (
    <div id="partial-showcase">
        <section className="section-box">
          <h2 className="header-title">Header Visual</h2>
          <Header />
        </section>

        <section className="section-box">
          <h2 className="header-title">Horizontal Menu Visual</h2>
          <HorizontalMenu />
        </section>

        <section className="section-box">
          <h2 className="header-title">Hamburger Menu Visual</h2>
          <HamburgerMenu />
        </section>

        <section className="section-box">
          <h2 className="header-title">Sign In Form Visual</h2>
          <SignInForm />
        </section>

        <section className="section-box">
          <h2 className="header-title">Registration Form Visual</h2>
          <RegistrationForm />
        </section>

        <section className="section-box">
          <h2 className="header-title">Footer Visual</h2>
          <Footer />
        </section>
      </div>
  );
}

export default PartialShowcase;