import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import MyButton from '../04_Button/MyButton'

export default class TodoList extends Component {

  state={
    todos:['吃火锅', '打麻将', '三国杀'],
    userInput:''
  }

  add = ()=>{
    const {todos,userInput} = this.state
    if (userInput.trim() !== '') {
      this.setState({todos:[userInput,...todos]})
    }
    alert('请输入正确的内容')
    this.refs.demo.clear()
	}

  render() {
    const {input,wraper,top,text} = styles
    return (
      <View style={wraper}>
        <View style={top}>
          <TextInput ref="demo" onChangeText={data => this.setState({userInput:data})} style={input}/>
          <MyButton onPress={this.add} btnStyle={{height:50, marginLeft:10}} text="添加" textStyle={{fontSize:20}}/>
        </View>
        <View>
          {
            this.state.todos.map((todo, index)=>(
              <Text key={index} style={text} >{todo}</Text>
            ))
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input:{
		width:200,
		fontSize:18,
		borderWidth:1,
		borderColor:'black'
	},
	wraper:{
		padding:10
	},
	top:{
		flexDirection:'row'
	},
	text:{
		fontSize:20
	}
})