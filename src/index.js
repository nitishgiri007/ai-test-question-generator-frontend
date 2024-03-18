import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './components/signuUP/signupComponst';
import SignInSide from './components/signIn/signIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SignUp /> */}
    <SignInSide />
  </React.StrictMode>
);


