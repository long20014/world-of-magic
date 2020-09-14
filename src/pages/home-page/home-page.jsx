import React from 'react';
import './home-page.scss';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="component-wrapper">
        <h1>HomePage</h1>
        <custom-button></custom-button>
      </div>
    );
  }
}
