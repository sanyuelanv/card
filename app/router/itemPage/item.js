import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView,Dimensions,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const {height, width} = Dimensions.get('window');
const HEIGHT = (height - 60)
const BOXHEIGHT = (height - 100)
class Item extends Component {
  constructor(props) {
    super(props)
    this._onPress = this._onPress.bind(this)
    this.pressTime = 0
    this.state = {
      type:false,
    }
  }
  _onPress(){
    if(this.pressTime == 0){
      this.pressTime = 1
      setTimeout(()=>{
        this.pressTime = 0
      },300)
    }
    else if(this.pressTime == 1){
      let type = this.state.type
      this.setState({type:!type,})
    }

  }
  render() {
    let {data,index,total} = this.props
    let {original,translate} = data
    let {type} = this.state
    return (
      <View style={styles.allBox}>
        <View style={[styles.boxOut,{backgroundColor:"#333",height:type?0:HEIGHT}]}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={this._onPress} >
              <View style={[styles.box,{minHeight:BOXHEIGHT}]}>
                <Text style={[styles.blackBoxText,{fontSize:original.size,lineHeight:original.size*1.5,}]}>{original.text}</Text>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
        <View style={[styles.boxOut,{backgroundColor:"#fff",height:type?HEIGHT:0}]}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={this._onPress} >
              <View style={[styles.box,{minHeight:BOXHEIGHT}]}>
                <Text style={[styles.wrietBoxText,{fontSize:translate.size,lineHeight:translate.size*1.5,}]}>{translate.text}</Text>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
        <View style={[styles.bottom,{width:width}]}>
          <Text style={[styles.bottomText,{color:type?"#333":"#fff"}]}>{index+"/"+total}</Text>
        </View>
      </View>
    )
  }
}
export default Item
