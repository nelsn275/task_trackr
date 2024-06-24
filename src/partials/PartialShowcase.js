import './PartialShowcase.css';
import Header from './Header';
import HorizontalMenu from './HorizontalMenu';
import HamburgerMenu from './HamburgerMenu';
import Footer from './Footer';
import CreateTaskForm from './CreateTaskForm';
import TaskList from './TaskList';

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
          <Footer />
        </section>

        <section className="section-box">
          <h2 className="header-title">Create Task Form Visual</h2>
          <CreateTaskForm />
        </section>

        <section className="section-box">
          <TaskList />
        </section>
      </div>
  );
}

export default PartialShowcase;