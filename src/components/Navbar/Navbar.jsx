import { useEffect, useState } from 'react';
import './navbar.scss';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import AnimateLetters from '../AnimateLetters/AnimateLetters';

function Navbar({openMenu, setOpenMenu}) {

  const open = () => setOpenMenu(!openMenu);
  const isOpen = openMenu ? 'active' : null;

  const [letterClass, setLetterClass] = useState()

  const logoArray = ['l','e','a','n','d','r','o','.','a','r','b','e','l','o']

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 0)
  }, [])


  return (
    <div className={`navbar ${isOpen}`}>
        <div className="wrapper">
            <div className="left">
              <a href="#presentation" className="logo">
                <AnimateLetters 
                  letterClass={`${letterClass} ${isOpen}`}
                  stringArray={logoArray}
                  index={1}/>
                </a>
              <div className="item-container">
                <CallIcon className="icon"/>
                <span><a href='tel:+5493515912166'>+549 3515912166</a></span>
              </div>
              <div className="item-container">
                <MailIcon className="icon"/>
                <span>lean.arbelo.dev@gmail.com</span>
              </div>
            </div>
            <div className="right">
              <div className="hamburguer" onClick={open}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;