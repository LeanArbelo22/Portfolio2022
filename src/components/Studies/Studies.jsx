import { useState } from 'react';
import './studies.scss';

function Studies() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: '1',
      title: 'Frontend Developer',
      icon: 'assets/mobile.png',
      desc: 'UTN.BA Facultad Regional de Buenos Aires',
      img: 'assets/frontend.png'
    },
    {
      id: '2',
      title: 'FullStack Developer',
      icon: 'assets/mobile.png',
      desc: 'UTN.BA Facultad Regional de Buenos Aires',
      img: 'assets/fullstack.png'
    },
    {
      id: '3',
      title: 'Bootcamp Fundamentos de la Programacion con Python',
      icon: 'assets/mobile.png',
      desc: 'CodigoFacilito',
      img: 'assets/codigo-facilito.png'
    }
  ]

  const handleClick = (way) => {
    way === 'left' ? 
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  };

  return (
    <div className="studies" id="studies">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {
          data.map((dataItem) => (
          <div className="container" key={dataItem.id}>
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src={dataItem.icon} alt="icon" />
                  </div>
                    <h2>{dataItem.title}</h2>
                    <p>{dataItem.desc}</p>
                    <span>Project</span>
                </div>
              </div>
              <div className="right">
                <img src={dataItem.img} alt={dataItem.title} />
              </div>
            </div>
        </div>
          ))
        }
      </div>
      <img src="assets/down.png" className="arrow left" alt="arrow" onClick={() => handleClick('left')} />
      <img src="assets/down.png" className="arrow right" alt="arrow" onClick={() => handleClick('right')} />
    </div>
  )
}

export default Studies;