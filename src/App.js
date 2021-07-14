import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./component/cover/Cover";
import Navbar from "./component/navbar/Navbar";
import About from "./component/about/About";
import Slider from "./component/slider/Slider";
import Info from "./component/info/Info";
import Footer from "./component/footer/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;