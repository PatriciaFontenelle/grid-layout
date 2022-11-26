import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard';
import reportWebVitals from './reportWebVitals';

import './index.css';
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);

reportWebVitals();
