import React from 'react'
import { Link } from 'react-router-dom';
import Trend from 'react-trend';
import ActivityChart from './activity-chart';

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
            <h1>Welcome back Jana,<br/> Things look <Link to="/weight" className="menu-button"><span>alright</span></Link></h1>
          </div>
          <div className="kpi">
            <div className="kpi-item temperature">
              <h2>37.65 <span>&deg;</span></h2>
              <p>Temperature</p>
              <div className="trending-graph">
                <Trend height={45} 
                  data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
                  smooth 
                  autoDraw 
                  autoDrawDuration={3000} 
                  autoDrawEasing="ease-out"
                  gradient={['#f39c6c']}
                  radius={10}
                  strokeWidth={5}
                  strokeLinecap={'butt'}
                />
              </div>
            </div>

            <div className="kpi-item calories">
              <h2>537 <span>cal</span></h2>
              <p>Calories burned</p>
              <div className="trending-graph">
                <Trend height={45} 
                  data={[10,3,8,2,9,0,5,0,0,1,0,2,5,9,5]}
                  smooth 
                  autoDraw 
                  autoDrawDuration={3000} 
                  autoDrawEasing="ease-out"
                  gradient={['#6dcadd']}
                  radius={10}
                  strokeWidth={5}
                  strokeLinecap={'butt'}
                />
              </div>
            </div>

            <div className="kpi-item bpm">
              <h2>87 <span>bpm</span></h2>
              <p>Heart rate</p>
              <div className="trending-graph">
                <Trend height={45} 
                  data={[5,5,5,5,5,5,5,5,5,5]}
                  smooth 
                  autoDraw 
                  autoDrawDuration={3000} 
                  autoDrawEasing="ease-out"
                  gradient={['#61afe8']}
                  radius={10}
                  strokeWidth={5}
                  strokeLinecap={'butt'}
                />
              </div>
            </div>

            <div className="kpi-item steps">
              <h2>3756</h2>
              <p>Steps</p>
              <div className="trending-graph">
                <Trend height={45} 
                  data={[0,10,0,10,0,10,0,10,0,10,0,10]}
                  smooth 
                  autoDraw 
                  autoDrawDuration={3000} 
                  autoDrawEasing="ease-out"
                  gradient={['#ba58e4']}
                  radius={10}
                  strokeWidth={5}
                  strokeLinecap={'butt'}
                />
              </div>
            </div>
          </div>
          <div className="morning-activity">
            <h1>Morning Activity</h1>
            <p className="legends">
              <span>Today</span>
              <span>Average</span>
            </p>
            <div className="chart-wrapper">
              <ActivityChart height={100}/>
            </div>
          </div>
        </main>
        

      </div>
    )
  }
}

export default Home;