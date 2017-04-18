import {Platform,Navigator} from 'react-native'
let headerTitleLeftMargin = Navigator.NavigationBar.Styles.Stages.Left.Title.marginLeft || 0
let {OS} =  Platform
let styles

if(OS == "android"){
  styles = {
    headerBlock: {
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderBottomColor: '#d1d1d1',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      backgroundColor: '#444444',
      flex:1,
    },
    header: {
      marginTop:20,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginRight: headerTitleLeftMargin,
      // backgroundColor: '#ccc',
    },
    headerText: {
      fontSize: 16,
      color: '#fff',
    },
    left: {
      height: 40,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerBack: {
      width:20,
      height:20,
    },
  }
}
else {
  styles = {
    headerBlock: {
      height:60,
      paddingTop:20,
      flexDirection: 'row',
      backgroundColor:"#263238",
    },
    itemRight:{
      height:40,
      width:40,
      // paddingLeft:15,
      // paddingRight:10,
      justifyContent:"center",
      alignItems:"center",
      // backgroundColor: '#ccc',
    },
    itemLeft:{
      width:40,
      height:40,
      // paddingLeft:10,
      // paddingRight:15,
      justifyContent:"center",
      alignItems:"center",
      // backgroundColor: '#ccc',
    },
    itemMid:{
      // flex:1,
      height: 40,
      justifyContent:"center",
      alignItems:"center",
      // backgroundColor: '#ddd',
    },
    text:{
      color:"#FFF",
      fontSize:16,
    }
  }
}
export default styles
