import React from 'react';
import ReactDOM from 'react-dom/client'; 
import AppLayout from './App';
const rootElement = document.getElementById('root');
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <AppLayout/>
    </React.StrictMode>
  );
