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
          <h1>Profile!</h1>
        </main>
      </div>
    )
  }
}

export default Profile;