import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch, faTimes, faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faSearch, faTimes, faArrowLeft, faSpinner);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);