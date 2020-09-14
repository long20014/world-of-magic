import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './login-page.scss';
import { connect } from 'react-redux';
import { loginAction } from 'actions/auth-action';

interface IProps {
  loginAction: Function;
  history: string[];
  isLoggedIn: boolean;
}

class LoginPage extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    this.props.loginAction();
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to={'/'} />;
    }
    return (
      <div className="component-wrapper">
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { loginAction })(LoginPage);
