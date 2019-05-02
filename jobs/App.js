import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import AuthScreen from './screens/AuthScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingScreen from './screens/SettingScreen'
import ReviewScreen from './screens/ReviewScreen'
import { Provider } from 'react-redux'
import store from './store'

export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const AppStackNavigator = createBottomTabNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthScreen,
  main: {
    screen: createBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: createStackNavigator({
          review: { screen: ReviewScreen },
          setting: { screen: SettingScreen }
        })
      }
    }, {
      defaultNavigationOptions: {
        tabBarVisible: false
      }, 
    })
  }
}, {
  defaultNavigationOptions: {
    tabBarVisible: false
  },
  lazy: true
})

const AppContainer = createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
