import { useState } from 'react';
import './App.scss';
import Presentation from './components/Presentation/Presentation';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Studies from './components/Studies/Studies';
import Menu from './components/Menu/Menu';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="app">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <Presentation />
        <Portfolio />
        <Studies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
