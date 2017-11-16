import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <p>&copy; 2017 Survey App Inc. All rights reserved!</p>
      </footer>
    )
  }
}

const AuthFooter = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (<Footer />);
  }
  return (null);
}

const mapStateToProps = state => {
  const { isLoggedIn } = state
  return {
    isLoggedIn
  }
}

export default connect(mapStateToProps)(AuthFooter)