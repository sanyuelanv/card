import {Platform} from 'react-native'
let {OS} = Platform
export default styles = {
  container: {
    flex: 1,
    flexDirection:"column",
    marginTop:60,
  },
  InputTitleBox:{
    padding:10,
  },
  title:{
    color:"#757575",
    fontSize:12,
  },
  inputTitle:{
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    height:40,
    borderColor: "#757575",
    borderWidth: 1,
  },
  inputMulTitle:{
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    height:100,
    borderColor: "#757575",
    borderWidth: 1,
  },
  touch:{
    height:50,
    position: "absolute",
    bottom:0,
    left:0,
    backgroundColor:"#263238",
  },
  unTouch:{
    height:50,
    position: "absolute",
    bottom:0,
    left:0,
    backgroundColor:"#e1e2e1",
  },
  button:{
    flex:1,
    height:50,
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText:{
    color:"#ffffff",
    fontSize:18,
  },
}
