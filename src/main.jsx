import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Add this style to ensure no margins
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.width = '100%';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);