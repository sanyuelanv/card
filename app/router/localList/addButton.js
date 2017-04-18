import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import Svg,{Path} from 'react-native-svg';
import styles from './styles';

class AddButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {route} = this.props
    return (
      <TouchableHighlight style={styles.addButton}>
        <Svg height="30" viewBox="0 0 24 24" width="30">
          <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#FFFFFF" />
          <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>
      </TouchableHighlight>
    )
  }
}
export default AddButton
