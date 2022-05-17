import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Employee from './Employee';
import UseMemo from './useMemo';
import useRefIs from './useRef';
import usememeo2 from './usememeo2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Employee />
    <UseMemo />
    <usememeo2 />
   <useRefIs />
  
  </React.StrictMode>
);

