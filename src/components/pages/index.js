import React, {useState} from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import Services from '../Services'
import InfoSection from '../InfoSection';
import {homeObjOne, homeObjTwo, homeObjThree} from '../InfoSection/Data';
import Footer from '../Footer';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />  
          <Navbar toggle={toggle} />
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services />
          <InfoSection {...homeObjThree}/>
          <Footer />
        </>
    )
}

export default Home;
