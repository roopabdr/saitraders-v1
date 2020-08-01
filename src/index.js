import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'; /* Added by Roopa */
import {ProductProvider} from './Context'; /* Added by Roopa */
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProductProvider> {/* ProductProvider Added by Roopa */}
  <Router> {/* Router Added by Roopa */}
    <App />
    {/* Router Added by Roopa */}
  </Router> {/* ProductProvider Added by Roopa */}
  </ProductProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
