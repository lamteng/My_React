import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Progress from './Progress';
import App from './App';
import Baby from './Baby';
import LoginForm from './LoginForm';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <div>
        <LoginForm/>
  </div>,
document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
