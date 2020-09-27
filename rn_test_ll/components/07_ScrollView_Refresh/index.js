import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, RefreshControl } from 'react-native'

export default class Demo extends Component {

  state = {
    newsList: [],
    isLoading: false
  }

  componentDidMount() {
    let arr = []
    for (let i = 1; i <= 41; i++) {
      arr.push({id:i, title:'新闻'+i})
    }
    this.setState({newsList:arr})
  }

  handleRefresh = ()=>{
    this.setState({isLoading:true})
    setTimeout(() => {
      const {newsList} = this.state
      this.setState({newsList:[{id:newsList.length+1, title:'新闻'+(newsList.length+1)},...newsList], isLoading: false})
    }, 1000);
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this.handleRefresh}
          />
        }
      >
        {
          this.state.newsList.map((news)=>{
            return (
              <Text style={{fontSize:20,backgroundColor: news.id % 2 ? 'pink' : 'skyblue'}} key={news.id} >{news.title}</Text>
            )
          })
        }
      </ScrollView>
    )
  }
}
