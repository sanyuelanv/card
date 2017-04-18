import React, {Component} from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import Svg,{Path} from 'react-native-svg';
import styles from './styles'

class Nav extends Component {
  constructor(props) {
    super(props)
    this._toOther = this._toOther.bind(this)
  }
  _toOther(){
    if(this.props.route == 'home')return
    // this.props.navigator.replace({name:"home",component:Home})
  }
  render() {
    let routeName = this.props.route.name || "本地列表"
    return (
        <View style = {styles.nav} >
          <TouchableOpacity onPress={()=>{this._toOther('local')}} style = {styles.item}>
            <View style = {styles.item}>
                <Svg height="20" viewBox="0 0 24 24" width="20" >
                  <Path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" fill={routeName == '本地列表'?"#05A5D1":"#545454"}/>
                  <Path d="M0 0h24v24H0z" fill="none"/>
                </Svg>
                <Text style = {routeName == '本地列表'?styles.itemActivityText:styles.itemText} >本地</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._toOther('net')}} style = {styles.item}>
            <View style = {styles.item}>
              <Svg height="20" viewBox="0 0 24 24" width="20">
                <Path d="M0 0h24v24H0z" fill="none"/>
                <Path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" fill={routeName == 'net'?"#05A5D1":"#545454"}/>
              </Svg>
              <Text style = {routeName == 'net'?styles.itemActivityText:styles.itemText} >网络</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._toOther('set')}} style = {styles.item}>
            <View style = {styles.item}>
              <Svg height="20" viewBox="0 0 24 24" width="20">
                <Path d="M0 0h24v24H0z" fill="none"/>
                <Path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill={routeName == 'set'?"#05A5D1":"#545454"} />
              </Svg>
              <Text style = {routeName == 'set'?styles.itemActivityText:styles.itemText} >设置</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}


export default Nav
