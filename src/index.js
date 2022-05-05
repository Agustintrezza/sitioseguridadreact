import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Recovery from './routes/Recovery';
import CloudPage from './routes/CloudPage';
import ContactPage from './routes/ContactPage';



import {BrowserRouter, Routes, Route} from 'react-router-dom' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App /> } />
        <Route path='/recover' element={ <Recovery /> } />
        <Route path='/cloud' element={ <CloudPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
    </Routes>
  </BrowserRouter>
);

