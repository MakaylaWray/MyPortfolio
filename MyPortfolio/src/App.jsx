import styles from './App.module.css';
import { Hero } from "./components/Hero/Hero";
import { NavBar } from './components/Navbar/Navbar';

function App() {
  return <div className={styles.App}>
      <NavBar/>
    <section id="Home">
      <Hero/>
    </section>
    <section id="About">About</section>
    <section id="Experience">Experience</section>
    <section id="Skills/Projects">Skills/Projects</section>
    <section id="Contact">Contact</section>
  </div>;
  
}

export default App
