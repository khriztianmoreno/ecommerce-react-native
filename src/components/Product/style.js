import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  saleThumb: {
    flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 5, paddingTop: 0, marginLeft: 4, marginRight: 4
  }
});
