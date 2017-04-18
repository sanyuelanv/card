import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView,Dimensions} from 'react-native';
import styles from './styles';
const {height, width} = Dimensions.get('window');

class Local extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {route,navigator} = this.props
    let {name,desc} = route
    return (
      <View style={styles.container}>
      </View>
    )
  }
}
export default Local
