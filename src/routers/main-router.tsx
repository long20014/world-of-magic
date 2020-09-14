import React from 'react';
import { requireLogin } from 'routers/guards';
import { GuardProvider } from 'react-router-guards';
import { Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Nav from 'components/nav/nav';
import HomePageRoute from 'pages/home-page/home-page-route';
import RpgRoute from 'pages/rpg-page/rpg-page-route';
import LoginPageRoute from 'pages/login-page/login-page-route';

const GLOBAL_GUARDS = [requireLogin];
const MainRouter: React.FC<any> = () => {
  return (
    <HashRouter>
      <Nav />
      <GuardProvider guards={GLOBAL_GUARDS} loading="Loading...">
        <Switch>
          {HomePageRoute()}
          {LoginPageRoute()}
          {RpgRoute()}
        </Switch>
      </GuardProvider>
    </HashRouter>
  );
};

export default MainRouter;
