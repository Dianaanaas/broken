import React, { StrictMode } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';

import rootReducer from './store/rootReducer';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
    <Router>
    <Provider store={rootReducer}>
    <App />
    </Provider>
    </Router>
    </StrictMode>
);
