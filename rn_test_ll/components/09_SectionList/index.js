import React, { Component } from 'react'
import { Text, View, SectionList, RefreshControl } from 'react-native'

export default class Demo extends Component {

  state = {
    newsList: [
      {id:'01', type:'国内新闻', data:[
        {id:'001',title:'国内新闻-------1'},
        {id:'002',title:'国内新闻-------2'},
        {id:'003',title:'国内新闻-------3'},
        {id:'004',title:'国内新闻-------4'},
        {id:'005',title:'国内新闻-------5'},
        {id:'006',title:'国内新闻-------6'}
      ]},
      {id:'02', type:'国际新闻', data:[
        {id:'001',title:'国际新闻-------1'},
        {id:'002',title:'国际新闻-------2'},
        {id:'003',title:'国际新闻-------3'},
        {id:'004',title:'国际新闻-------4'},
        {id:'005',title:'国际新闻-------5'},
        {id:'006',title:'国际新闻-------6'}
      ]},
      {id:'03', type:'本地新闻', data:[
        {id:'001',title:'本地新闻-------1'},
        {id:'002',title:'本地新闻-------2'},
        {id:'003',title:'本地新闻-------3'},
        {id:'004',title:'本地新闻-------4'},
        {id:'005',title:'本地新闻-------5'},
        {id:'006',title:'本地新闻-------6'}
      ]},
      {id:'03', type:'米国新闻', data:[
        {id:'001',title:'米国新闻-------1'},
        {id:'002',title:'米国新闻-------2'},
        {id:'003',title:'米国新闻-------3'},
        {id:'004',title:'米国新闻-------4'},
        {id:'005',title:'米国新闻-------5'},
        {id:'006',title:'米国新闻-------6'}
      ]}
    ],
    isLoading: false
  }

  // handleRefresh = ()=>{
  //   this.setState({isLoading:true})
  //   setTimeout(() => {
  //     const {newsList} = this.state
  //     this.setState({newsList:[{id:newsList.length+1, title:'新闻--------'+(newsList.length+1)},...newsList], isLoading: false})
  //   }, 1000);
  // }

  demo = ({index, item, section})=>{
    return (
      <Text style={{lineHeight:46, fontSize:26,backgroundColor: item.id % 2 ? 'skyblue' : 'pink'}}>{item.title}</Text>
    )
  }

  renderSectionHeader = ({section})=>{
    return <Text style={{lineHeight:56, fontSize:30, backgroundColor:'tomato', fontWeight:'bold'}}>{section.type}</Text>
  }

  render() {
    return (
      <SectionList
        sections={this.state.newsList}
        keyExtractor={(item, index)=>item.id.toString()}
        renderItem={this.demo}
        renderSectionHeader={this.renderSectionHeader}
      />
    )
  }
}
