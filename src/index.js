import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.test'
import './index.css';
import './style.css'
import App from './App'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={  <App />}/>
      </Routes>
    </Router>
  
  </React.StrictMode>
);

