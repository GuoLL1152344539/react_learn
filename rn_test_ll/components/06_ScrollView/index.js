import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'

export default class Demo extends Component {

  state = {
    colors: ['tomato', 'skyblue', 'gray', 'pink', 'royalblue', 'red']
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
      >
        {
          this.state.colors.map((color)=>{
            return (
              <ScrollView
                style={{
                  backgroundColor:color,
                  width:Dimensions.get('screen').width,
                  height:300,
                  padding:20
                }}
              >
                <Text>{color}</Text>
              </ScrollView>
            )
          })
        }
      </ScrollView>
    )
  }
}
