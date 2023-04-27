import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { FitSquadApp } from './FitSquadApp';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <FitSquadApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
