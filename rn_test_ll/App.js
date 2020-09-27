import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native';

// import Basic from './components/01_basic/Basic'
// import Content from './components/02_image/index'
// import Content from './components/03_input/index'
// import Content from './components/05_todoList/index'
// import Content from './components/06_ScrollView/index'
// import Content from './components/07_ScrollView_Refresh/index'
// import Content from './components/08_FlatList/index'
// import Content from './components/09_SectionList/index'
import Content from './components/10_SectionList_Car/index'
// import Content from './components/11_SectionList_Car_axios/index'

export default class App extends Component {
  render() {
    return ( 
      <>
        {/* <StatusBar
          backgroundColor="skyblue"
          barStyle="dark-content"
          // hidden={true}
          // animated={true}
          // translucent={true}
        />
        <Basic/> */}
        <Content/>
        
        
      </>
    )
  }
}

