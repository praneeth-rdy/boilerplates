import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './styles/global.css';
import reportWebVitals from './utils/report-web-vitals';
import logger from './utils/logger';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals(logger.log);