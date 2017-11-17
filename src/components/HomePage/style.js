import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import commonColor from '../../theme/variables/commonColor';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  bannerHeading: {
    fontSize: 16,
    fontWeight: '300',
    color: '#696d79',
    margin: 10,
    marginBottom: 0
  },
  sliderImageText: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 5
  },
  smallText: {
    fontSize: 11,
    color: '#a4a5a6',
    marginTop: 2.5,
    marginBottom: 10
  },
  price: {
    color: '#000'
  },
  cutOffPrice: {
    color: '#a4a5a6',
    marginLeft: 5,
    textDecorationLine: 'line-through'
  },
  discount: {
    color: commonColor.brandSuccess,
    marginLeft: 5
  }
};
