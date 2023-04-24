import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
