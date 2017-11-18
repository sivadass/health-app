import React from 'react'

class Home extends React.Component {
  render(){
    return(
      <div>
        <header>

        </header>
        <main>
          <div className="welcome">
            <h1>Welcome back Jana,<br/> Things look <span>alright</span></h1>
          </div>
          <div className="kpi">
            <div className="kpi-item temperature">
              <h2>37.65 &deg;</h2>
              <p>Temperature</p>
              <div className="trending-graph">
                ...
              </div>
            </div>

            <div className="kpi-item calories">
              <h2>537 cal</h2>
              <p>Calories</p>
              <div className="trending-graph">
                ...
              </div>
            </div>

            <div className="kpi-item bpm">
              <h2>87 bpm</h2>
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