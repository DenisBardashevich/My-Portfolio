
import Header from './blocks/Header';

import Welcom from './blocks/Welcom';
import Skills from './blocks/Skills';
import Project from './blocks/Project';
import Footer from './blocks/Footer';
import Nav from './blocks/Nav';
import { useState } from 'react';






function App() {
  const [NavOpen, setNavOpen] = useState(false);
  const  toggleNav = () => {
    setNavOpen(!NavOpen);
  }

  return (
    <>
      <Header onOpen={toggleNav}/>
      <Welcom />
      <Skills />
      <Project />
      <Footer />
      {NavOpen && <Nav onClose={toggleNav}/>}
    </>
  )
}

export default App
