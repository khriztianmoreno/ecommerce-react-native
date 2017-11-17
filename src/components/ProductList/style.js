import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  listThumb: {
    flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'
  }
});
