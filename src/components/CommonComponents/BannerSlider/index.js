import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { List, ListItem, InputGroup, Input, Icon, Card, CardItem, Body} from 'native-base';
import { observer, inject } from 'mobx-react/native';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
@inject("view.app", "domain.user", "app", "routerActions")
@observer
class BannerSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryDrop: null
        };
    }
    categoryDropdown(id) {
        if(this.state.categoryDrop === id) {
            this.setState({categoryDrop: null});
            return;
        }
        this.setState({ categoryDrop: id });
    }
  render() {
    const userStore = this.props['domain.user'];
    const { routerActions } = this.props;
    return (
      <CardItem button onPress={this.props.onPress} style={{padding:7}}>
          <Body style={{alignItems:'center'}}>
            <Image style={[styles.sliderImage,(this.props.imageStyle) && this.props.imageStyle]} source={this.props.bannerImageSource}/>
              {(this.props.bannerImageText) &&
                <Text style={styles.sliderImageText} numberOfLines={1} ellipsizeMode='tail'>{this.props.bannerImageText}</Text>
              }
              {(this.props.bannerSmallText) &&
                <Text style={styles.smallText} numberOfLines={1} ellipsizeMode='tail'>{this.props.bannerSmallText}</Text>
              }
          </Body>
      </CardItem>
    );
  }
}
const styles = StyleSheet.create({
  bannerSliderImagesWrap :{
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'space-between'
  },
  sliderImage : {
    height: (deviceWidth*2/3)-40,
    width: deviceWidth*2/3,
    resizeMode: 'stretch'
  },
  sliderImageText: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 5
  },
  smallText :{
    fontSize: 11,
    color: '#a4a5a6',
    marginTop:2,
    marginBottom:0
  }
});
export default BannerSlider;
