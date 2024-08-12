import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';  // Ensure this is necessary, otherwise combine into index.css
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PageNotFound from './features/PageNotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router basename="/frontend"> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

