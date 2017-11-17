import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default {
  bannerImage : {
    resizeMode: 'cover',
    width: deviceWidth-46,
    alignSelf: 'center',
    height: deviceWidth-68,
    marginTop: 22,
    marginBottom: 0
  },
  heading:{
    fontSize: 17,
    fontWeight : '900',
    textAlign: 'center',
    marginTop:10
  },
  subHeading:{
    fontSize : 12,
    textAlign: 'center',
    color: '#787878',
    marginBottom: 8
  }
} 
