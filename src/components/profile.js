import React from 'react'
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render(){
    return(
      <div className="profile">
        <header>
          <Link to="" className="menu-button">
            <img src="dist/back.svg" alt=""/>
          </Link>
          <Link to="/weight" className="menu-button">
            <img src="dist/settings.svg" alt=""/>
          </Link>
        </header>
        <main>
          <div className="progress-wrapper">
            <div className="container">
              <div className="label one">Metric 1</div>
              <div className="progress-bar">
                <div className="progress fill-1">
                  <div className="glow"></div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="label two">Metric 2</div>
              <div className="progress-bar">
                <div className="progress fill-2">
                  <div className="glow"></div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="label three">Metric 3</div>
              <div className="progress-bar">
                <div className="progress fill-3">
                  <div className="glow"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Profile;