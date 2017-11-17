import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default{
  notiBar: {
    width: deviceWidth,
    backgroundColor: '#f6f6f6',
    // opacity: 0.1
  },
 
 content: {
   flex:1,
   alignItems:'center',
   justifyContent:'flex-start'
 },
 backgroundImage: {
   resizeMode: 'contain',
   height:250
 },
 fbutton: {
   backgroundColor:'#4267b2',
   borderColor:'#4267b2' ,
   paddingHorizontal:20,
   alignSelf:'center'
 },
 ficon: {
   color:'#fff',
   marginRight: 10
 },
  borderRight:{
    borderColor:'#DDD',
    borderRightWidth:1,
    height: 18
  },
  borderLeft:{
    borderColor:'#DDD',
    borderLeftWidth:1,
    height: 18
  },
 ftext: {
   color:'#fff',
   fontSize:16,
   paddingTop:4,
   fontWeight:'bold'
 },
 optionView: {
   flex:1,
   alignSelf:'center',
   paddingTop:20,
   paddingBottom:30
 },
 optionText: {
   color:'#898C94',
   fontSize: 14,
   marginVertical:30
 },
 lists: {
   flex:1,
   flexDirection:'row',
   borderBottomColor:'transparent',
   justifyContent:'space-between'
 },
 loginSignup: {
   flex:3,flexDirection:'row'
 },
 buttonText: {
   color:'#7468C5',
   fontWeight:'bold',
   fontSize: 14,
   marginBottom:22
 },
 button: {
   paddingHorizontal: 30,
   alignItems: 'center'
 }
};
