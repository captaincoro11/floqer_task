import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyProvider from './context/provider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyProvider>
    <App />
    </MyProvider>
   
  </React.StrictMode>
);

