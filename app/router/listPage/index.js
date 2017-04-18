import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView,Dimensions,Animated,PanResponder} from 'react-native';
import styles from './styles';
const {height, width} = Dimensions.get('window');

class Local extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.Value(0)
    }
  }
  _panResponder:{}
  _changeStyle(){
    let header = this.state.pan.interpolate({
      inputRange: [-200,0,200],
      outputRange: [100,150,200],
      extrapolate: 'clamp'
    })
    // console.log(header);
    return [
      styles.topBox,
      {
        height:header
      }
    ]
  }
  componentWillMount() {
    this._animatedValueY = 0
    this.state.pan.addListener((value) =>{this._animatedValueY = value.value})
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder:()=>{return true},
      onMoveShouldSetPanResponder:()=>{return true},
      onPanResponderGrant:(e, gesture) => {
        this.state.pan.setOffset(this._animatedValueY)
        this.state.pan.setValue(0)
      },
      onPanResponderMove:Animated.event([null, {dy: this.state.pan}]),
      onPanResponderRelease: () => {
        console.log(this.state.pan);
        Animated.spring(this.state.pan, {toValue: 0}).start();

      },
      onPanResponderTerminate: () => {}
    })
  }
  componentWillUnmount() {
    this.state.pan.x.removeAllListeners()
    this.state.pan.y.removeAllListeners()
  }
  render() {
    let {route,navigator} = this.props
    let {name,desc} = route
    return (
      <View style={styles.container} {...this._panResponder.panHandlers} >
        <ScrollView>
        <Animated.View style={this._changeStyle()} >
          <Text style={styles.topBoxText}>{desc}</Text>
        </Animated.View>
        <View style={styles.bottomBox}></View>
        </ScrollView>
      </View>
    )
  }
}
export default Local
