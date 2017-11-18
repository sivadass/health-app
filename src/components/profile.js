import React from 'react'
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render(){
    return(
      <div>
        <header>
          <Link to="/">Back</Link>
        </header>
        <main>
          <h1>Profile!</h1>
        </main>
      </div>
    )
  }
}

export default Profile;