import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios'
import firebase from 'firebase'

const ROOT_URL = `https://us-central1-one-time-password-2836f.cloudfunctions.net`

class SignInForm extends Component {
  state = { phone: "", code: "" }

  handleSubmit = async () => {
    const { phone, code } = this.state
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code})

      firebase.auth().signInWithCustomToken(data.token)

    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return(
      <View>

        <View style={{ marginBottom: 10 }}>
          <Text>Enter Phone Number</Text>
          <Input
            value={this.state.phone}
            placeholder="xxx-xxx-xxxx"
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text>Enter Code</Text>
          <Input
            value={this.state.code}
            placeholder="xxxx"
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    )
  }
}

export default SignInForm
