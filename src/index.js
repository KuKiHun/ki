import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
//import App from './App';
//import App from './1_basic/App';
//import App from './2_link/App';
//import App from './3_fetch/weather';
//import App from './4_axios/weather';
//import App from './5_movies/App';
//import App from './6_spring_conn/App_test';
import App from './6_spring_conn/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
