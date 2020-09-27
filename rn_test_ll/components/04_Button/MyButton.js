import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default class MyButton extends Component {

  render() {
    const {btnStyle, textStyle, text, onPress} = this.props
    return (
      <TouchableOpacity
        style={{
          backgroundColor:"pink",
          width:100,
          height:40,
          justifyContent:'center',
          borderRadius:10,
          ...btnStyle
        }}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text
          style={{
            color:"white",
            textAlign:'center',
            ...textStyle
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}
