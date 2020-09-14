import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { MainRouter } from 'routers';
import store from 'store/store';
import Nav from 'components/nav/nav';
export default class App extends React.Component {
  render() {
    return (
      <div className="component-wrapper">
        {/* <Provider store={store}>{MainRouter.prototype}</Provider> */}
        <MainRouter />
      </div>
    );
  }
}
