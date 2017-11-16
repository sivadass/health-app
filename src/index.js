import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'

// Styles
import './stylesheets/style.scss'

// Components

render(
    <Router>
      <div className="app-wrapper">
        <h1>Hello world!</h1>
      </div>
    </Router>,
  document.getElementById('root'),
  function(){
    let loader = document.getElementById('app-loader');
    loader.parentNode.removeChild(loader);
  }
)
