import React, {Component} from 'react';
import {StyleSheet, Text, View,FlatList} from 'react-native';
import styles from './styles';
import Item from './item';
const dataArrary = [
  {key:0,name:"实例1",number:12,index:1,desc:"这是描述"},
  {key:1,name:"实例2",number:12,index:1,desc:"这是描述"},
  {key:2,name:"实例3",number:12,index:1,desc:"这是描述"},
  {key:3,name:"实例4",number:12,index:1,desc:"这是描述"},
  {key:4,name:"实例5",number:12,index:1,desc:"这是描述"},
  {key:5,name:"实例6",number:12,index:1,desc:"这是描述"},
  {key:6,name:"实例7",number:12,index:1,desc:"这是描述"},
  {key:7,name:"实例8",number:12,index:1,desc:"这是描述"},
  {key:8,name:"实例9",number:12,index:1,desc:"这是描述"},
  {key:9,name:"实例10",number:12,index:1,desc:"这是描述"},
  {key:10,name:"实例11",number:12,index:1,desc:"这是描述"},
  {key:11,name:"实例12实例12实例12实例12实例12实例12实例12实例12实例12实例12实例12实例12实例12实例12实例12实例12实例12实例12",number:12,index:1,desc:"这是描述"},
]

class List extends Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }
  _renderItem(obj){
    let {navigator} = this.props
    // let {name,number,index} = obj.item
    return(
      <Item {...obj.item} navigator={navigator} />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={dataArrary}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}
export default List
