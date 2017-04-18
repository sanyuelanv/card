import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView,Dimensions} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import Item from './item';
const {height, width} = Dimensions.get('window');
const testData = [
  {
    id:0,
    original:{
      type:"text",
      image:"",
      text:"测试1-黑色",
      size:60,
    },
    translate:{
      type:"text",
      image:"",
      text:"测试1-白色",
      size:60,
    }
  },
  {
    id:1,
    original:{
      type:"text",
      image:"",
      text:"测试2-黑色",
      size:60,
    },
    translate:{
      type:"text",
      image:"",
      text:"测试2-白色",
      size:60,
    }
  }
]

class Local extends Component {
  constructor(props) {
    super(props)
  }
  _renderItem(){
    let total = testData.length;
    return testData.map((item,index)=>{
      return (
        <Item data={item} index={index+1} key={item.id} total={total} />
      )
    })
  }
  render() {
    let {route,navigator} = this.props
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true}>
          {this._renderItem()}
        </Swiper>
      </View>
    )
  }
}
export default Local
