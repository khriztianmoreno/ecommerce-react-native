import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const contentTheme = {
      '.padder': {
        padding: variables.contentPadding,
      },
      flex: 1,
      backgroundColor: '#f7f7f7',
      marginBottom: (Platform.OS === 'ios') ? 50 : 50,
      'NativeBase.Segment': {
        borderWidth: 0,
        backgroundColor: 'transparent'
      }
  };

  return contentTheme;
};
