import React, { useRef, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services";
import Waitlist from "./pages/waitlist";
import Footer from "./pages/footer"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Home />
      <About />
      <Services />
      <Waitlist />
      <Footer />
    </>
  )
}

export default App