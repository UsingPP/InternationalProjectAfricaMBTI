import React from 'react';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

const container = document.getElementById('root');
render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  container
);
