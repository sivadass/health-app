import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../components/Header'

class AuthHeader extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  }

  render() {
    const { isLoggedIn } = this.props
    if (isLoggedIn) {
      return (<Header />);
    }
    return (null);
  }
}

const mapStateToProps = state => {
  const { isLoggedIn } = state
  return {
    isLoggedIn
  }
}

export default connect(mapStateToProps)(AuthHeader)