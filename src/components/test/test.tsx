import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { logoutAction } from 'actions/auth-action';
import { availableNavLinks, moreNavLinks, navLinks } from '../nav/navLinks';

interface IProps extends RouteComponentProps<any> {
  logoutAction: Function;
  isLoggedIn: boolean;
}

class Test extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logoutAction();
    this.props.history.push('login');
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <div className="component-wrapper">
        <div className="nav">
          <div className="logo-wrapper">
            <img src="img/L - logo.png" width="45" height="45" alt="" />
          </div>
          <div className="nav-links-wrapper">
            <ul className="nav-links">
              {availableNavLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
              <li>
                <div className="dropdown">
                  <span className="underline">More</span>
                  <div className="dropdown-content">
                    {moreNavLinks.map((link) => (
                      <div key={link.path} className="mt-10">
                        <Link to={link.path}>{link.label}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                {isLoggedIn && (
                  <button onClick={this.logout} style={{ color: 'black' }}>
                    Log out
                  </button>
                )}
              </li>
            </ul>
            <div className="burger-dropdown">
              <div className="burger"></div>
              <div className="dropdown-content">
                {navLinks.map((link) => (
                  <div key={link.path} className="mt-10">
                    <Link to={link.path}>{link.label}</Link>
                  </div>
                ))}
                <div className="mt-10">
                  {isLoggedIn && (
                    <button onClick={this.logout} style={{ color: 'black' }}>
                      Log out
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { logoutAction })
)(Test) as React.ComponentType;
// export default Test;
// export default withRouter<IProps, any>(Test);
