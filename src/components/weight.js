import React from 'react'
import { Link } from 'react-router-dom';
import WeightChart from './weight-chart';

class Weight extends React.Component {
  render(){
    return(
      <div className="weight">
        <header>
          <Link to="" className="menu-button">
            <img src="dist/back.svg" alt=""/>
          </Link>
          <Link to="" className="menu-button">
            <img src="dist/settings.svg" alt=""/>
          </Link>
        </header>
        <main>
          <div className="primary-info">
            <p className="date">June 16, 2019</p>
            <h1>56.5 Kg</h1>
            <p>Body Weight</p>
          </div>
          <div className="chart-wrapper">
            <WeightChart />
          </div>
        </main>
      </div>
    )
  }
}

export default Weight;