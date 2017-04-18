import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableHighlight, Navigator,Image,Dimensions} from 'react-native';
import styles from './styles'
import Svg,{Path} from 'react-native-svg';
const {height, width} = Dimensions.get('window');

let _onPressBack = (navigator)=>{
  navigator.pop()
}
let _onPressAdd = (navigator)=>{
  navigator.push(
    { id: 'AddList',name: "添加卡片组",left:2,right:null,sceneConfig:Navigator.SceneConfigs.FloatFromRight}
  )
}

let MidTitle = (route, navigator, index, navState)=>{
  let {routeStack,presentedIndex} = navState
  let {name} = route
  return (
    <View style={[styles.itemMid,{width:width-90}]}><Text style={styles.text} numberOfLines={1} >{name}</Text></View>
  )
}
let LeftButton = (route, navigator, index, navState) =>{
  let {routeStack,presentedIndex} = navState
  let {left} = route
  if(left == 0){
    return(
      <TouchableHighlight activeOpacity={1} underlayColor={"#263238"} onPress={()=>{_onPressAdd(navigator)}} style={styles.itemLeft}>
        <Svg height="24" viewBox="0 0 24 24" width="24">
          <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#FFFFFF"/>
          <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>
      </TouchableHighlight>
    )
  }
  else if(left == 1){
    return(
      <TouchableHighlight activeOpacity={1} underlayColor={"#263238"} onPress={()=>{_onPressBack(navigator)}} style={styles.itemLeft}>
        <Svg height="24" viewBox="0 0 24 24" width="24" >
          <Path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" fill="#FFFFFF" />
          <Path d="M0-.75h24v24H0z" fill="none"/>
        </Svg>
      </TouchableHighlight>
    )
  }
  else if(left == 2){
    return(
      <TouchableHighlight activeOpacity={1} underlayColor={"#263238"} onPress={()=>{_onPressBack(navigator)}} style={styles.itemLeft}>
        <Svg height="24" viewBox="0 0 24 24" width="24">
          <Path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#FFFFFF"/>
          <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>
      </TouchableHighlight>
    )
  }
  else {return(<View></View>)}
}
let RightButton = (route, navigator, index, navState) =>{
  let {right} = route
  if(right == 0){
    return(
      <TouchableHighlight style={styles.itemRight}>
        <Svg height="24" viewBox="0 0 24 24" width="24">
            <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#ffffff"/>
            <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>
      </TouchableHighlight>
    )
  }
  else if(right == 1){
    return(
      <TouchableHighlight style={styles.itemRight}>
        <Svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <Path d="M0 0h24v24H0z" fill="none"/>
          <Path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#FFFFFF" />
        </Svg>
      </TouchableHighlight>
    )
  }
  else if(right == 2){
    return(
      <TouchableHighlight activeOpacity={1} underlayColor={"#263238"} onPress={()=>{_onPressAdd(navigator)}} style={styles.itemLeft}>
        <Svg height="24" viewBox="0 0 24 24" width="24">
          <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#FFFFFF"/>
          <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>
      </TouchableHighlight>
    )
  }
  else {return(<View></View>)}
}

let Header = () => {
  return(
    < Navigator.NavigationBar
      routeMapper = {
        {
          LeftButton:LeftButton,
          RightButton: RightButton,
          Title:MidTitle,
        }
      }
      style = {styles.headerBlock}
    />
)}

export default Header
