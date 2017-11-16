import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { authenticate } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(e){
    e.preventDefault();
    this.props.authenticate();
    this.props.history.push('/');
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="login-wrapper">
          <div className="hero-section">
            <h1>Survey App</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className="login-section">
            <div className="login-form">
              <div className="wrapper">
                <form action="">
                  <div className="form-group form-group-icon">
                    <span className="form-control-icon icon icon-profile">
                    </span>
                    <input type="text" className="form-control" placeholder="Username" required/>
                  </div>
                  <div className="form-group form-group-icon">
                    <span className="form-control-icon icon icon-lock">
                    </span>
                    <input type="password" className="form-control" placeholder="Password" required/>
                  </div>
                  <div className="form-group">
                    <button className="button-primary" type="submit" onClick={this.handleLogin}>Login</button>
                  </div>
                </form>
                <p>Or Sign-in using</p>
                <div className="social-login">
                  <button className="facebook">
                    <i className="icon-facebook"></i> <span>Facebook</span>
                  </button>
                  <button className="google-plus">
                    <i className="icon-google-plus"></i> <span>Google</span>
                  </button>
                </div>
                <p>New User?</p>
                <Link className="button" to="/register">Register here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authenticate }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Login));