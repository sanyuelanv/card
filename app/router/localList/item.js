import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Navigator} from 'react-native';
import styles from './styles';

class Item extends Component {
  constructor(props) {
    super(props)
    this._onPress = this._onPress.bind(this)
  }
  _onPress(e){
    let {navigator,name,desc} = this.props
    navigator.push(
      { id: 'listPage',name: name,desc:desc,left:2,right:null,sceneConfig:Navigator.SceneConfigs.FloatFromRight}
    )
  }
  render() {
    let {name,number,index} = this.props
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor={"#b3e5fc"}
        activeOpacity={0.3}
      >
        <View style={styles.item}>
          <View style={styles.itemTitle}>
            <Text style={styles.titleName} numberOfLines={2}>{name}</Text>
          </View>
          <View style={styles.itemRight}>
            <Text style={styles.numberName}>{index +"/"+ number}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
export default Item
