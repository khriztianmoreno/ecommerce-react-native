import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import {
  Text,
  Card,
  CardItem
} from 'native-base';
var deviceWidth = Dimensions.get('window').width;

class SaleBrandThumb extends Component {
  render() {
    // var imageSource = require("../../../assets/images/saleThumb1.png");
    var thumbWidth = deviceWidth/3 - 20;
    return (
      <View style={{height: 90, width: deviceWidth/3-10}}>
        <Card style={{width: thumbWidth, borderWidth: 0, borderColor: 'transparent', shadowOpacity: 0, padding:0}}>
          <CardItem style={{alignSelf:'center', flex: 1, flexDirection: 'column', shadowOpacity: 0,  padding:0}}>
            <Image style={{alignSelf:'auto', width: thumbWidth, height: 60, marginBottom: 0, marginLeft: 4.5, borderWidth: 1, borderColor: '#111', marginBottom: -1}} source={this.props.imageSource}/>
            <Text style={{textAlign: 'center', fontSize: 14, fontWeight: '500', backgroundColor: '#111', color: '#fff', paddingTop: 2, paddingBottom: 2, width: thumbWidth+10 }}>{this.props.saleData}</Text>
          </CardItem>
        </Card>
      </View>
    );
  }
}
export default SaleBrandThumb;
