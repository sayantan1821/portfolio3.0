import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Contact from "../contact/ContactComponent";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "../education/EducationImg";
import { Fade } from "react-reveal";
import Experience from "../experience/Experience";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Educations theme={props.theme} />
      <Experience theme={props.theme} />
      <Contact {...props} theme={props.theme} setTheme={props.setTheme} />
      <section id="footer">
        <Footer theme={props.theme} />
      </section>
    </div>
  );
}

export default Home;
