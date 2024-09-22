import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Arrow from "./components/arrow/Arrow";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/Section6";
import Section7 from "./components/section7/Section7";
import Section8 from "./components/section8/Section8";
import Footer from "./components/footer/Footer";
import { LinkProvider } from "./context/Context";

function App() {
  return (
    <>
      <LinkProvider>
        <Navbar />
        <section id="section1">
          <Section1 />
        </section>
        <section id="section2">
          <Section2 />
        </section>
        <Arrow bg={"#F7F7F7"} color={"white"} />
        <section id="section3">
          <Section3 />
        </section>
        <section id="section4">
          <Section4 />
        </section>
        <section>
          <Section5 />
        </section>
        <section>
          <Section6 />
        </section>
        <section>
          <Section7 />
        </section>
        <section>
          <Section8 />
        </section>
        <Footer />
      </LinkProvider>
    </>
  );
}

export default App;
