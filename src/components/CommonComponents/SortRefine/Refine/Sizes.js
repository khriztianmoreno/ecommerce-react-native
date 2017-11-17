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
  Item,
  Input,
  Container,
  Content,
  List,
  Tabs
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// import myTheme from '../../../../themes/themeLight.js';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';

class Sizes extends Component {

render(){
  var dataSaleThumb = [
    {
      id: 1,
      categories: 'XL',
      qty:3505
    },
    {
      id: 2,
      categories: 'L',
      qty:3471
    },
    {
      id: 3,
      categories: 'M',
      qty:3276
    },
    {
      id: 4,
      categories: 'S',
      qty:3212
    },
    {
      id: 5,
      categories: 'XXL',
      qty:2343
    },
    {
      id: 6,
      categories: 'XS',
      qty:1775
    },
    {
      id: 7,
      categories: '3XL',
      qty:137
    },
    {
      id: 8,
      categories: '3XS',
      qty:60
    },
    {
      id: 9,
      categories: '4XL',
      qty:26
    },
    {
      id: 10,
      categories: '5XL',
      qty:13
    },
    {
      id: 11,
      categories: '6XL',
      qty:12
    },
    {
      id: 12,
      categories: '7XL',
      qty:8
    },
    {
      id: 13,
      categories: 'XXL',
      qty:3
    },
    {
      id: 14,
      categories: '8XL',
      qty:2
    }
  ];

    return (
      <Container>
           <Content padder bounces={true} scrollEnabled={true} showsVerticalScrollIndicator={false} style={{  padding:0,marginBottom:0 }} >
           <Grid>
               <Col style={{ backgroundColor: '#FFFFFF' }}>
                 <View >
                   <List contentContainerStyle={{}} dataArray={dataSaleThumb} renderRow={(item) =>
                   <TouchableOpacity >
                    <View style={{padding: 12, borderBottomColor: '#ddd', borderBottomWidth: 1,flex:1,flexDirection:'row',justifyContent:'space-between',paddingBottom:0}}>
                        <Icon active name="checkmark" style={{color:'#777',fontSize: 24, fontWeight: '300', marginTop:-5}} />
                       <Text style={{paddingLeft:20 ,fontSize: 12, fontWeight: '300', color: '#777',flex:1,alignItems:'flex-start'}}>{item.categories}</Text>
                       <Text style={{ fontSize: 12, fontWeight: '300', color: '#777' }}>{ item.qty }</Text>
                       </View>
                   </TouchableOpacity>}>
                   </List>
                 </View>
               </Col>
           </Grid>
           </Content>
      </Container>
    )
}
}

const styles = StyleSheet.create({

});
export default Sizes;
