import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Platform
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

class Brand extends Component {

render(){
  var dataSaleThumb = [
    {
      id: 1,
      categories: 'Arrow'
    },
    {
      id: 2,
      categories: 'Arrow New York'
    },
    {
      id: 3,
      categories: 'Blackberrys'
    },
    {
      id: 4,
      categories: 'CODE by Lifestyle'
    },
    {
      id: 5,
      categories: 'Cotton Country P...'
    },
    {
      id: 6,
      categories: 'Four One Oh'
    },
    {
      id: 7,
      categories: 'Hancock'
    },
    {
      id: 8,
      categories: 'INVICTUS'
    },
    {
      id: 9,
      categories: 'John Miller'
    },
    {
      id: 10,
      categories: 'John Players'
    },
    {
      id: 11,
      categories: 'Louis Philips'
    },
    {
      id: 12,
      categories: 'Marks & Spencer'
    },
    {
      id: 13,
      categories: 'Park Avenue'
    },
    {
      id: 14,
      categories: 'Peter England'
    },
    {
      id: 15,
      categories: 'Peter England Eli...'
    },
    {
      id: 16,
      categories: 'Raymond'
    },
    {
      id: 17,
      categories: 'Urban Nomad'
    },
    {
      id: 18,
      categories: 'Van Heusen'
    },
    {
      id: 19,
      categories: 'Wills Lifestyle'
    }
  ];

    return (
      <Container>
          <Item borderType="regular" style={{ borderColor: 'transparent', borderRadius: 5, backgroundColor: '#eee',width: deviceWidth*(3/4)-50,height:30,margin:10 }} >
              <Icon name="search" style={{ fontSize:20,color: '#777',marginLeft:10 ,marginTop:5 }} />
              <Input placeholderTextColor="#777" placeholder="Search by brand name" style={{ height:(Platform.OS === 'ios') ? 30 : undefined}}/>
          </Item>
           <Content padder bounces={true} scrollEnabled={true} showsVerticalScrollIndicator={false} style={{  padding:0, marginBottom:0 }} >
           <Grid>
               <Col style={{ backgroundColor: '#FFFFFF' }}>
                 <View >
                   <List contentContainerStyle={{}} dataArray={dataSaleThumb} renderRow={(item) =>
                   <TouchableOpacity >
                       <View style={{padding: 12, borderBottomColor: '#ddd', borderBottomWidth: 1, flex:1,flexDirection:'row',justifyContent:'space-between',paddingBottom:0}}>
                        <Icon active name="checkmark" style={{color:'#777',fontSize: 24, fontWeight: '300', marginTop:-5 }} />
                       <Text style={{paddingLeft:20 ,fontSize: 12, fontWeight: '300', color: '#777',flex:1,alignItems:'flex-start'}}>{item.categories}</Text>
                       <Text style={{ fontSize: 12, fontWeight: '300', color: '#777' }}>20</Text>
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
export default Brand;
