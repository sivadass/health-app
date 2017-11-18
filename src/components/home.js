import React from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render(){
    return(
      <div>
        <header>
          <Link to="" className="menu-button">
            <img src="dist/menu.svg" alt="Hamburger Menu"/>
          </Link>
          <Link to="/profile" className="menu-avatar">
            <img src="dist/user.png" alt="User Avatar"/>
          </Link>
        </header>
        <main>
          <div className="welcome">
            <h1>Welcome back Jana,<br/> Things look <span>alright</span></h1>
          </div>
          <div className="kpi">
            <div className="kpi-item temperature">
              <h2>37.65 <span>&deg;</span></h2>
              <p>Temperature</p>
              <div className="trending-graph">
                ...
              </div>
            </div>

            <div className="kpi-item calories">
              <h2>537 <span>cal</span></h2>
              <p>Calories burned</p>
              <div className="trending-graph">
                ...
              </div>
            </div>

            <div className="kpi-item bpm">
              <h2>87 <span>bpm</span></h2>
              <p>Heart rate</p>
              <div className="trending-graph">
                ...
              </div>
            </div>

            <div className="kpi-item steps">
              <h2>3756</h2>
              <p>Steps</p>
              <div className="trending-graph">
                ...
              </div>
            </div>
          </div>
          <div className="morning-activity">
            <h1>Morning Activity</h1>
            <p className="legends">
              <span>Today</span>
              <span>Average</span>
            </p>
          </div>
        </main>
        

      </div>
    )
  }
}

export default Home;