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

class Color extends Component {

render(){
  var dataSaleThumb = [
    {
      id: 1,
      categories: 'Navy',
      color:'#000080'
    },
    {
      id: 2,
      categories: 'Navy blue',
      color:'#221188'
    },
    {
      id: 3,
      categories: 'Blue',
      color:'#0000ff'
    },
    {
      id: 4,
      categories: 'Black',
      color:'#000000'
    },
    {
      id: 5,
      categories: 'Charcoal',
      color:'#36454f',
    },
    {
      id: 6,
      categories: 'Grey',
      color:'#808080'

    },
    {
      id: 7,
      categories: 'Green',
      color:'#008000'
    },
    {
      id: 8,
      categories: 'Beige',
      color:'#f5f5dc'

    },
    {
      id: 9,
      categories: 'Cream',
      color:'#ffffcc'
    },
    {
      id: 10,
      categories: 'Brown',
      color:'#a52a2a'
    },
    {
      id: 11,
      categories: 'White',
      color:'#ffffff'
    },
    {
      id: 12,
      categories: 'Silver',
      color:'#c0c0c0'

    },
    {
      id: 13,
      categories: 'Off White',
      color:'#faebd7'

    }
  ];

    return (
      <Container>
           <Content padder bounces={true} scrollEnabled={true} showsVerticalScrollIndicator={false} style={{  padding:0, marginBottom:0 }} >
           <Grid>
               <Col style={{ backgroundColor: '#FFFFFF' }}>
                 <View >
                   <List contentContainerStyle={{}} dataArray={dataSaleThumb} renderRow={(item) =>
                   <TouchableOpacity >
                       <View style={{padding: 12, borderBottomColor: '#ddd', borderBottomWidth: 1,flex:1,flexDirection:'row',justifyContent:'space-between',paddingBottom:0}}>
                        <Icon active name="checkmark" style={{color:'#777',fontSize: 24, fontWeight: '300', marginTop:-5 }} />
                         <View style={{ padding:0,marginLeft:20,marginTop:0 ,marginBottom:10, width:50,height:20,backgroundColor: item.color }}></View>
                       <Text style={{paddingLeft:10 ,fontSize: 12, fontWeight: '300', color: '#777',flex:1,alignItems:'flex-start'}}>{item.categories}</Text>
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
export default Color;
