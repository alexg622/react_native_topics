import React from 'react';
import SignUpForm from './components/signUpForm'
import { StyleSheet, Text, View } from 'react-native';
import SignInForm from "./components/signInForm"
import firebase from 'firebase'

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
