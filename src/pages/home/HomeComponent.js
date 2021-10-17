import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Contact from "../contact/ContactComponent";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Contact {...props} theme={props.theme} setTheme={props.setTheme} />
      <section id="footer">
        <Footer theme={props.theme} />
      </section>
    </div>
  );
}

export default Home;
