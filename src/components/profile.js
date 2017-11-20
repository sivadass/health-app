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
        <div className="progress-bar primary">
          <div className="progress fill-1">
            <div className="glow"></div>
          </div>
        </div>
        <main>
          <div className="measurements">
            <div className="measurement-item">
              <div className="wrapper">
                <h2>25</h2>
                <p>Age</p>
              </div>
            </div>

            <div className="measurement-item">
              <div className="wrapper">
                <h2>A</h2>
                <p>Blood T...</p>
              </div>
            </div>

            <div className="measurement-item">
              <div className="wrapper">
                <h2>20.4</h2>
                <p>BMI</p>
              </div>
            </div>

            <div className="measurement-item">
              <div className="wrapper">
                <h2>172 <span>cm</span></h2>
                <p>Height</p>
              </div>
            </div>

            <div className="measurement-item">
              <div className="wrapper">
                <h2>53 <span>kg</span></h2>
                <p>Weight</p>
              </div>
            </div>

            <div className="measurement-item">
              <div className="wrapper">
                <h2>21 <span>%</span></h2>
                <p>Fat</p>
              </div>
            </div>
          </div>
          <div className="progress-wrapper">
            <p className="progress-title">YOUR GOALS</p>
            <div className="container progress-item">
              <div className="label one">
                <span className="label-text">Lose weight</span>
                <span className="label-value">4.6 kg / 8 kg</span>
              </div>
              <div className="progress-bar">
                <div className="progress fill-1">
                  <div className="glow"></div>
                </div>
              </div>
            </div>

            <div className="container progress-item">
              <div className="label two">
                <span className="label-text">Running per week</span>
                <span className="label-value">8.2 km / 10 km</span>
              </div>
              <div className="progress-bar">
                <div className="progress fill-2">
                  <div className="glow"></div>
                </div>
              </div>
            </div>

            <div className="container progress-item">
              <div className="label three">
                <span className="label-text">Steps per day</span>
                <span className="label-value">3346 / 10000</span>
              </div>
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