import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { createLogger } from 'redux-logger'

// Styles
import './stylesheets/style.scss'

// Redux 
import reducer from './reducers'
import actions from './actions'

// Components
import App from './containers/App'
import AuthHeader from './containers/AuthHeader'
import Footer from './components/Footer'
import Dashboard from './containers/Dashboard'
import MySurveys from './components/MySurveys'
import GoPro from './components/GoPro'
import AddSurvey from './components/AddSurvey'
import Preview from './components/Preview'
import Login from './components/Login'
import Register from './components/Register'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <Router>
      <div className="app-wrapper">
        <AuthHeader/>
        <main>
          <Route path="/" exact component={Dashboard}  />
          <Route path="/dashboard" component={Dashboard}  />
          <Route path="/go-pro" component={GoPro}  />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/my-surveys" component={MySurveys} />
          <Route path="/add-survey" component={AddSurvey} />
          <Route path="/preview" component={Preview} />
        </main>
        <Footer/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
  function(){
    console.log("Page loaded");
    document.getElementById('app-loader').style.display = "none";
  }
)
