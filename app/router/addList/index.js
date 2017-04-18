import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity,Dimensions} from 'react-native';
import styles from './styles';
const {height, width} = Dimensions.get('window');

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title:"",
      desc:"",
    }
    this._handleButton = this._handleButton.bind(this)
    this._onChangeTitle = this._onChangeTitle.bind(this)
    this._onChangeDesc = this._onChangeDesc.bind(this)
  }
  _handleButton(){
    let {route,navigator} = this.props
    let {title,desc} = this.state
    console.log(navigator);
    if(title.length > 0){
      navigator.pop()
    }
  }
  _onChangeDesc(e){
    this.setState({desc: e.nativeEvent.text})
  }
  _onChangeTitle(e){
    this.setState({title:e.nativeEvent.text})
  }
  render() {
    let {title,desc} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.InputTitleBox}>
          <Text style={styles.title}>输入标题(最长25个字符)</Text>
          <TextInput
            value={title}
            style={styles.inputTitle}
            maxLength={25}
            onChange = {this._onChangeTitle}
          />
        </View>
        <View style={styles.InputTitleBox}>
          <Text style={styles.title}>输入简介(最长150个字符)</Text>
          <TextInput
            value={desc}
            style={styles.inputMulTitle}
            maxLength={150}
            multiline={true}
            onChange = {this._onChangeDesc}
          />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          underlayColor={"#263238"}
          onPress={this._handleButton}
          style={[title.length>0?styles.touch:styles.unTouch,{width:width}]}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>确定</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
export default AddList
