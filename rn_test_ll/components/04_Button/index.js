import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import MyButton from './MyButton'

export default class Demo extends Component {
  render() {
    return (
      <>
        <View style={{width:100}}>
          <Button color="skyblue" onPress={()=>console.log(1)} title="点我" />
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:"pink",
              width:100,
              height:40,
              justifyContent:'center',
              borderRadius:10
            }}
            activeOpacity={0.5}
            // onPress={()=>alert(1)}
          >
            <Text style={{color:"white",textAlign:'center'}}>点我</Text>
          </TouchableOpacity>
        </View>
        <View>
          <MyButton btnStyle={{backgroundColor:"gray"}} text={'点我一下'}/>
        </View>
      </>
    )
  }
}
