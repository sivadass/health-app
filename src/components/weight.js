import React from 'react'
import { Link } from 'react-router-dom';

class Weight extends React.Component {
  render(){
    return(
      <div>
        <header>
          <Link to="" className="menu-button">
            <img src="dist/back.svg" alt=""/>
          </Link>
          <Link to="" className="menu-button">
            <img src="dist/settings.svg" alt=""/>
          </Link>
        </header>
        <main>
          <h1>Weight</h1>
          <p>June 16, 2019</p>
          <h1>56.5 Kg</h1>
          <p>Body Weight</p>
        </main>
      </div>
    )
  }
}

export default Weight;