import React, { Component } from 'react'
import { Text, View, TextInput,StyleSheet } from 'react-native'

export default class MyInput extends Component {

  state={
    inputData:''
  }

  show = ()=>{
    alert(this.state.inputData)
  }

  render() {
    return (
      <View style={{padding:10}}>
        <TextInput 
          style={this.style.inputStyle}
          // keyboardType="number-pad"
          placeholder="请输入"
          // placeholderTextColor="skyblue"
          onChangeText={text => this.setState({inputData:text}) }
        />
        <Text onPress={this.show} style={{backgroundColor:'skyblue',fontSize:28}} >点我提示输入</Text>
      </View>
    )
  }
  style = StyleSheet.create({
    inputStyle:{
      borderColor:'black',
      borderWidth:1,
      fontSize:20
    }
  })
}
