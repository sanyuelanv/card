import React, {Component} from 'react'
import {StyleSheet,Text,View,Navigator} from 'react-native'
import LocalList from "./localList"
import CardList from "./itemPage"
import AddList from "./addList"
import ListDesc from "./listPage"
import Header from "../component/header/index.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene(route, navigator) {
    switch (route.id) {
      case "localList":
        return (<LocalList navigator={navigator} route={route} />)
        break;
      case "cardList":
        return (<CardList navigator={navigator} route={route} />)
        break;
      case "AddList":
        return (<AddList navigator={navigator} route={route} />)
        break
      case "listPage":
        return (<ListDesc navigator={navigator} route={route} />)
        break
      default:
        return (<LocalList navigator={navigator} route={route} />)
    }
  }
  render() {
    // let route = { id: 'cardList',name:"测试1",left:1,right:1}
    let route = { id: 'localList',name: "本地列表",left:null,right:2}
    return (
      <Navigator
        configureScene={(route) => {
          if (route.sceneConfig) {return route.sceneConfig;}
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        initialRoute={route}
        renderScene = {this.renderScene}
        navigationBar={Header()}
      />
    )
  }
}

export default App
