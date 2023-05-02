import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import ReactGA from 'react-ga4';
import Header from "./components/Header";
import React, {useState, useEffect} from "react";
import AnimatedCursor from "react-animated-cursor";
import GridLoader
from "react-spinners/GridLoader";

ReactGA.initialize("G-B15RW0RCTP");




function App() {
  const [loading, setLoading] = useState (false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
}, [])
  return (
    <div >
       <AnimatedCursor
        innerSize={20}
        outerSize={35}
        outerScale={1.7}
        innerScale={0.8}
        trailingSpeed={8}
        color='203,213,225' />
      {
        loading ?
<div className="App"> 
        <GridLoader
        size={30}
        color={"#0369a1"}
        loading={loading}
      />
</div>
        :

        <div>
         
        <Header />
        <NavBar />
        <Home />
        <About/>
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
        <SocialLinks />
      </div>
}
      
    </div>
  );
}

export default App;
