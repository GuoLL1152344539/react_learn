import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'

export default class MyImage extends Component {
  render() {
    return (
      <View>
        {/* 引入本地图片 */}
        {/* <Image resizeMode="center" style={{width:300,height:300,backgroundColor:'pink'}} source={require('./img.jpg')}/> */}
        {/* 引入网络图片---必须给宽高 */}
        {/* <Image resizeMode="center" style={{width:300,height:300,backgroundColor:'skyblue'}} source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3511544063,4112539952&fm=26&gp=0.jpg'}}/> */}
        {/* 引入base64编码图片 */}
        {/* <Image source={{uri:''}} /> */}
        {/* <ImageBackground resizeMode="center" style={{width:300,height:300,backgroundColor:'gray'}} source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3511544063,4112539952&fm=26&gp=0.jpg'}}> */}
          {/* <Text>0422</Text>
        </ImageBackground> */}
        {/* 引入安卓静态文件图片 */}
        <Image resizeMode="center" style={{width:300,height:300,backgroundColor:'skyblue'}} source={{uri:'img'}} />
      </View>
    )
  }
}
