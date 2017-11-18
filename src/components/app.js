import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Profile from './profile';
import Weight from './weight';


class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Weight" component={Weight}/>
        </div>
      </Router>
    )
  }
}

export default App;