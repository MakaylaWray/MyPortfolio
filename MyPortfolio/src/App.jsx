import styles from './App.module.css';
import { Hero } from "./components/Hero/Hero";
import { NavBar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { getImageUrl } from './util'
function App() {
  return <div className={styles.App}>
      <NavBar/>
    <section className={styles.home}>
      <Hero/>
    </section>
    <section className={styles.about}>
      <About/>
    </section>
    <section id="Experience">Experience</section>
    <section id="Skills/Projects">Skills/Projects</section>
    <section id="Contact">Contact</section>
  </div>;
  
}

export default App
