import React from 'react'
import { render } from 'react-dom'

// Styles
import './stylesheets/style.scss'

// Root Component
import App from './components/app'

// Render
render(
  <App />,
  document.getElementById('root'),
  function(){
    let loader = document.getElementById('app-loader');
    loader.parentNode.removeChild(loader);
  }
)
