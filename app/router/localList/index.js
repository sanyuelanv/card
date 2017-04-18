import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Nav from '../../component/navBar';
import List from './list';
import AddButton from './addButton';
import styles from './styles';

class Local extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {route,navigator} = this.props

    return (
      <View style={styles.container}>
        <List navigator={navigator} />
        <Nav route={route} />
      </View>
    )
  }
}
export default Local
