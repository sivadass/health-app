import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Dashaboard extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  }
  componentDidMount(){
    if(!this.props.isLoggedIn){
      this.props.history.push('/login');
    }
  }
  render() {
    return(
      <div className="container">
        <div className="dummy-component">
          <h1>Dashboard</h1>
          <p>Page Under Construction, please comeback later!</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { isLoggedIn } = state
  return {
    isLoggedIn
  }
}

export default withRouter(connect(mapStateToProps)(Dashaboard));