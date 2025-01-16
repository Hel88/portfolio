import Navigation from '../components/Navigation';
import Education from '../components/EducationComponent';
import Projects from '../components/ProjectsComponent';
import Skills from '../components/SkillsComponent';
import Contact from '../components/ContactComponent';
import About from '../components/AboutComponent';
import styles from "./page.module.css";
import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import dynamic from 'next/dynamic';


export default function Home() {
  return (
    <div className='pt-5'>
      <main data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

        {/* Barre de navigation */}
        <Navigation />

        {/* Paragraphe welcome */}
        <About />


        {/* Projets */}
        <div className="container mt-3">
          <section id="title-projects">
            <Projects />
          </section>
        </div>

        <div className="col-md-6 pt-5 mx-auto">
          {/* Compétences */}
          <section id="title-skills">
            <Skills />
          </section>

          {/* Education */}
          <section id="title-education">
            <Education />
          </section>
        </div>

        <div className='blue-paragraph'>
          <div className='p-2 col-md-8 mt-5 mx-auto'>
          
            {/* Contact */}
            <section id="title-contact">
              <Contact />
            </section>

            <div className='pt-5'> </div>
            <p className='text-center text-muted'>
              <em>Made with nextjs and bootstrap. Last updated : jan 2025</em>
            </p>

          </div>
        </div>

      </main>
    </div>
  )
}