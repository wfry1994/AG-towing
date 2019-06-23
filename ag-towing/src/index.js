import React from 'react';
import ReactDOM from 'react-dom';
import './scripts/styles/index.css';
import App from './scripts/components/AppComponent';

const render = routes => ReactDOM.render(<App routes={routes}/>, document.getElementById('root'))

if(module.hot) {
  const newRoutes = require('./scripts/routes')
  render(newRoutes)
}

