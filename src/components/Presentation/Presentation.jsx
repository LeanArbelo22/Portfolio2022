import Typewriter from 'typewriter-effect';
import './presentation.scss';

function Presentation() {


  return (
    <div className='presentation' id='presentation'>
      <div className="left">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Leandro Arbelo</h1>
          <h3>Full Stack Developer / 
            <span>
              <Typewriter 
                options={{
                  strings: ['Javascript', 'Python', 'React', 'CSS', 'Node.js', 'MongoDB'],
                  autoStart: true,
                  loop: true,
                  cursor: '/'
                }}
              />
            </span>
          </h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="arrow" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <img src="assets/lean-png.png" alt="man" />
        </div>
      </div>

    </div>
  )
}

export default Presentation;