import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const tabHeadingTheme = {
    flexDirection: 'row',
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    'NativeBase.Text': {
      color: '#777',
      marginHorizontal: 7,
      fontSize:14
    },
    'NativeBase.Icon': {
      color: variables.topTabBarTextColor,
      fontSize: (platform==='ios') ? 26 : undefined
    },
    '.active': {
      'NativeBase.Text': {
        color: '#555',
        fontWeight: '400'
      },
      'NativeBase.Icon': {
        color: variables.topTabBarActiveTextColor
      },
    }
  };


  return tabHeadingTheme;
};
