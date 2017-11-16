import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { logout } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends React.Component {
  constructor(props){
    super();
    this.state = {
      isDropdownActive: false
    }
  }
  handleLogout(e){
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/login');
  }
  handleDropdown(e){
    e.preventDefault();
    this.setState({
      isDropdownActive: !this.state.isDropdownActive
    })
  }
  render(){
    return(
    <header>
      <h1 className="logo">Survey App</h1>

      <ul className="left-menu">
        <li><NavLink exact to='/'>Dashboard</NavLink></li>
        <li><NavLink exact to="/my-surveys">My Surveys</NavLink></li>
        <li><NavLink exact to="/go-pro">Go Pro</NavLink></li>
      </ul>
      <div className="right-menu">
        <div className="cta">
          <Link className="add-survey" to="/add-survey"><i className="icon-add"></i> Add Surveys</Link>
        </div>

        <div className="account dropdown-wrapper">
          <a href="#" onClick={this.handleDropdown.bind(this)} className={this.state.isDropdownActive ? "dropdown active" : "dropdown"}> <i className="icon-profile"></i> Dan Abramov</a>
          <div className="dropdown-contents">
            <a href="#" onClick={this.handleLogout.bind(this)}> Logout</a>
          </div>
        </div>
      </div>
    </header>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Header));