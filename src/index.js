import React from 'react';
import ReactDOM from 'react-dom';
import './style/take-action.css';
import './style/donation.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/whawedo.css';
import './style/index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
