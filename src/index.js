import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './utility/store';
import { Provider } from 'react-redux';
import App from './app';
import './index.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 <Provider store={store}>
   <Router>
    <App/>
   </Router>
 </Provider>
  </>
);
