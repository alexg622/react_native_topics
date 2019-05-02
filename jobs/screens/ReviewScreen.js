import React, { Component } from 'react'
import { View, Text, Platform, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Review Jobs',
      headerRight: (
        <Text
          onPress={() => navigation.navigate("setting")}
          style={{ marginRight: 10, backgroundColor: "rgba(0,0,0,0)", color: "rgba(0, 122, 255, 1)" }}
        >
          Setting
        </Text>
      ),
      style: {
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    }
  }

  constructor(props) {
    super(props)
  }

  renderLikdedJobs = () => {
    return this.props.likedJobs.map(job => {
      return (
        <Card>
          <View style={{ height: 200 }}>
            <View>
              <Text>{job.company}</Text>
              <Text>{job.formattedRelativeTime}</Text>
            </View>
          </View>
        </Card>
      )
    })
  }

  render() {
    return(
      <ScrollView>
        {this.renderLikedJobs}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ likedJobs }) => {
  return { likedJobs }
}

export default connect(mapStateToProps, {})(ReviewScreen)
