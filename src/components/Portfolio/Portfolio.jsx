import { useState, useEffect } from 'react';
import { 
  reactPortfolio, 
  staticPortfolio, 
  pythonPortfolio, 
  jsPortfolio, 
  cvPortfolio } from '../../data';
import PortfolioList from './PortfolioList/PortfolioList';
import './portfolio.scss';

function Portfolio() {
  const [selected, setSelected] = useState('react');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'react',
      title: 'React App'
    },
    {
      id: 'static',
      title: 'Static Web'
    },
    {
      id: 'python',
      title: 'Python'
    },
    {
      id: 'js/css',
      title: 'Vanilla JS / CSS'
    },
    {
      id: 'cv',
      title: 'Curriculums'
    }
  ];

  useEffect(() => {
    switch(selected){
      case 'react':
        setData(reactPortfolio);
        break;
      case 'static':
        setData(staticPortfolio);
        break;
      case 'python':
        setData(pythonPortfolio);
        break;
      case 'js/css':
        setData(jsPortfolio);
        break;
      case 'cv':
        setData(cvPortfolio);
        break;
      default:
        setData(reactPortfolio)
    }

  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Porfolio</h1>
      <ul>
        {
          list.map((item) => (
            <PortfolioList 
            title={item.title}
            key={item.id}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id} />
          ))
        }
      </ul>

      <div className="container">
        {
          data.map((dataItem) => (
            <div className="item" key={dataItem.title}>
              <img src={dataItem.img} alt={dataItem.title} />
              <h3>{dataItem.title}</h3>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Portfolio;