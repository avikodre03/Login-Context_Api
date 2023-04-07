import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import MainProvider from './ContextApi/Context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <MainProvider>
     <App />

   </MainProvider>

  
  
 
);
