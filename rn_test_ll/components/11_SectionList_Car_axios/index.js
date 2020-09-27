import React, { Component } from 'react'
import { Text, Image, SectionList, View } from 'react-native'
import axios from 'axios'
// import cars from '../../assets/json/car.json'

export default class Demo extends Component {

  state = {
    carList: [],
  }

  renderItem = ({index, item})=>{
    return (
      <View style={{flexDirection:'row'}}>
        <Image style={{width:100, height:100}} source={{uri:item.icon}} />
        <Text style={{fontSize:30}}>{item.name}</Text>
      </View>
    )
  }

  renderSectionHeader = ({section})=>{
    return <Text style={{fontSize:40, backgroundColor:'tomato', fontWeight:'bold'}}>{section.title}</Text>
  }

  componentDidMount(){
    axios.get('http://h5xiaoguoguo.utools.club/total').then(
      respose => {
        this.setState({carList:respose.data})
      },
      error => {error}
    )
  }

  render() {
    return (
      <SectionList
        sections={this.state.carList}
        keyExtractor={(item, index)=>index.toString()}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
      />
    )
  }
}
