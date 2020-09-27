import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, RefreshControl } from 'react-native'

export default class Demo extends Component {

  state = {
    newsList: [],
    isLoading: false
  }

  componentDidMount() {
    let arr = []
    for (let i = 1; i <= 41; i++) {
      arr.push({id:i, title:'新闻--------'+i})
    }
    this.setState({newsList:arr})
  }

  handleRefresh = ()=>{
    this.setState({isLoading:true})
    setTimeout(() => {
      const {newsList} = this.state
      this.setState({newsList:[{id:newsList.length+1, title:'新闻--------'+(newsList.length+1)},...newsList], isLoading: false})
    }, 1000);
  }

  demo = ({index,item})=>{
    return (
      <Text style={{fontSize:20,backgroundColor: item.id % 2 ? 'pink' : 'skyblue'}}>{item.title}</Text>
    )
  }

  render() {
    return (
      <FlatList
        data={this.state.newsList}//指定数据源
        renderItem={this.demo}
        keyExtractor={(item, index)=>item.id.toString()}
        // horizontal
        ListHeaderComponent={<Text style={{fontSize:30}}>新闻列表</Text>}
        refreshing={this.state.isLoading}
        onRefresh={this.handleRefresh}
      >

      </FlatList>
    )
  }
}
