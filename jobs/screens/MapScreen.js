import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-elements'
import { MapView } from 'expo'
import { connect } from 'react-redux'
import * as actions from '../actions'

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true })
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region })
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      console.log("in navigation");
      this.props.navigation.navigate('deck')
    })
  }

  render() {
    if(!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return(
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
      <View style={styles.buttonContainer}>
          <Button
            large
            title="Search this area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
  }
}

export default connect(null, actions)(MapScreen)