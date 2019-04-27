import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, Animated, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height
const SCREEN_WIDTH = Dimensions.get("window").width

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props)

    const position = new Animated.ValueXY()

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture)
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 }
        }).start()
      }
    })

    this.position = position
    this.panResponder = panResponder

  }

  render() {
    console.log("is debugger working");
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>100</Text>
        </View>
          <Animated.View style={{ ...this.position.getLayout(), ...styles.card}} {...this.panResponder.panHandlers}>
            <Image style={styles.cardImage} source={{ uri: "https://iv1.lisimg.com/image/16631503/740full-demi-rose.jpg"}} />
          </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: "center"
  },

  header: {
    width: SCREEN_WIDTH,
    backgroundColor: "black",
    color: "red",
    justifyContent: "center",
    alignItems: "center",
    height: Math.floor(0.1*SCREEN_HEIGHT)
  },

  headerText: {
    color: "red",
    fontSize: Math.floor(0.05*SCREEN_HEIGHT)
  },

  card: {
    marginTop: "5%",
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    backgroundColor: "pink"
  },

  cardImage: {
    // minHeight: Math.floor(0.4 * SCREEN_HEIGHT),
    height: Math.floor(0.5 * SCREEN_HEIGHT),
    // minWidth: Math.floor(0.9 * SCREEN_HEIGHT),
    width: Math.floor(0.9 * SCREEN_WIDTH),
    resizeMode: "contain"
  }
})
