import React from 'react';
import HomePage from 'pages/home-page/home-page';
import { GuardedRoute } from 'react-router-guards';

const HomePageRoute = () => {
  return (
    <GuardedRoute
      path="/"
      exact
      component={HomePage}
      meta={{ AUTH_ONLY: true }}
    />
  );
};

export default HomePageRoute;
