import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  Text,
  Card,
  CardItem,
  Icon,
  Header,
  Button,
  Title,
  Footer,
  Container,
  Content,
  List,
  Tabs
} from 'native-base';
import Brand from './Brand.js';
import Color from './Color.js';
import Price from './Price';
import Discount from './Discount';
import Sizes from './Sizes';
import Pattern from './Pattern';
import Collar from './Collar';
import Fabric from './Fabric';
import Occasion from './Occasion';
import Fit from './Fit';
import SetContents from './SetContents';
class CommonRefine extends Component{

  render() {
 const { routerActions } = this.props;
         switch (this.props.comp) {
           case 'Brand':
              return <Brand />
          case  'Colour':
              return <Color />
          case 'Price':
              return <Price />
          case 'Discount':
               return <Discount />
          case 'Sizes':
                return <Sizes />
          case 'Pattern':
                return <Pattern />
          case 'Collar':
                return <Collar />
          case 'Fabric':
                return <Fabric />
          case 'Occasion':
                return <Occasion />
          case 'Fit':
                return <Fit />
          case 'Set Contents':
                return <SetContents />

          default :return <Brand />
         }
    // console.log(this.props.comp);
    // var id =this.props.comp;
    // console.log(id);
    return (
      // switch (id) {
      //   case 'Brand':
      //     return <Brand />
      //     break;
      //
      //
      // }
      // <Brand />
      <View />
    );
  }

}

export default CommonRefine;
