import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Slides from '../components/Slides'
import _ from 'lodash'
import { AppLoading } from 'expo'

const SLIDE_DATA = [
  { text: "Welcome to JobApp", color: "#03A9F4" },
  { text: "Use this to get a job", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" }
]

class WelcomeScreen extends Component {
  state = {
    token: null
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem('fb_token')
    if (token) {
      this.setState({ token })
    } else {
      this.setState({ token: false })
    }
  }


  onSlidesComplete = () => {
    this.props.navigation.navigate("Auth")
  }

  render() {
    if(_.isNull(this.state.token)) {
      return <AppLoading />
    }
    return(
      <Slides data={SLIDE_DATA} onSlidesComplete={this.onSlidesComplete}/>
    )
  }
}

export default WelcomeScreen
