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
import { List, ListItem, InputGroup, Input, Icon} from 'native-base';
import { observer, inject } from 'mobx-react/native';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
@inject("view.app", "domain.user", "app", "routerActions")
@observer
class Banner extends Component {
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
        <TouchableOpacity onPress={this.props.onPress} style={styles.bannerImageContainer}>
            <Image style={styles.bannerImage} source={this.props.bannerSource}/>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
bannerImageContainer :{
    alignItems: 'center',
  },
bannerImage : {
    width: null,
    flex: 1,
    height: deviceWidth
  }
});
export default Banner;
