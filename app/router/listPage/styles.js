import {Platform} from 'react-native'
let {OS} = Platform
export default styles = {
  container: {
    flex: 1,
    flexDirection:"column",
    marginTop:60,
  },
  topBox:{
    height:150,
    backgroundColor:"#e1e2e1",
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden",
  },
  topBoxText:{
    fontSize:20,
  }
}
