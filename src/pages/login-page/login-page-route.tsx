import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from 'pages/login-page/login-page';

const LoginPageRoute = () => {
  return (
    <Route path="/login" component={LoginPage} />
  )
}

export default LoginPageRoute;