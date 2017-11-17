import React, { Component } from 'react';
import {
  Image,
  Dimensions
} from 'react-native';
import {
  View,
  Text,
  Card,
  CardItem,
  Container,
  Content
} from 'native-base';
import { inject } from 'mobx-react/native';

var deviceWidth = Dimensions.get('window').width;

@inject("routerActions")
class SaleThumb extends Component {
  render() {
    // var imageSource = require("../../../assets/images/saleThumb1.png");
    const navigation = this.props.navigation;
    return (
      <Card style={{width: deviceWidth, borderWidth: 0, marginTop: -3, borderColor: 'transparent', shadowOpacity: 0}}>
        <CardItem onPress={() =>navigation.navigate("ProductList")} style={{width: deviceWidth, borderColor: 'transparent', alignSelf: 'center'}}>
          <Image style={{width: null, flex: 1, resizeMode: 'stretch', height: 153,}} source={this.props.imageFlexSource}/>
        </CardItem>
      </Card>
    );
  }
}
export default SaleThumb;
