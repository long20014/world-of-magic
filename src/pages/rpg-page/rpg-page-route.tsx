import React from 'react';
import RpgPage from 'pages/rpg-page/rpg-page';
import { GuardedRoute } from 'react-router-guards';
const RpgPageRoute = () => {
  return (
    <GuardedRoute path="/rpg" exact component={RpgPage} meta={{AUTH_ONLY: true}} />
  )
}

export default RpgPageRoute;