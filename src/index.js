import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import SignUp from './components/signuUP/signupComponst';
// import SignInSide from './components/signIn/signIn';
import Content from './components/dashboard/content/content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Content /> */}
    <App />
  </React.StrictMode>
);


