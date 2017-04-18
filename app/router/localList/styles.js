import {Platform} from 'react-native'
let {OS} = Platform
export default styles = {
  container: {
    flex: 1,
    flexDirection:"column",
    // paddingTop:30,
    marginTop:30,
  },
  list:{
    // marginBottom:80,
  },
  item:{
    flex:1,
    height:60,
    padding:10,
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor:"#e1e2e1",
    justifyContent:"center",
    alignItems:"center",
  },
  itemTitle:{
    flex:1,
    justifyContent:"center",
  },
  titleName:{
    color:"#555555",
    fontSize:16,
  },
  numberName:{
    color:"#888",
    fontSize:12,
  },
  itemRight:{
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:"center",
  }
}
