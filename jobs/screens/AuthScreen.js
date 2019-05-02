import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { facebookLogin } from '../actions';
import PropTypes from 'prop-types'

class AuthScreen extends Component {
  componentDidMount() {
    AsyncStorage.setItem("fb_token", "Yes its here")
    this.props.facebookLogin()
    this.props.navigation.navigate("map")
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps)
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate("map")
    }
  }

  render() {
    return(
      <View />
    )
  }
}

AuthScreen.propTypes = {
  facebookLogin: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => {
  return {
    token: auth.token
  }
}

export default connect(mapStateToProps, { facebookLogin })(AuthScreen);
