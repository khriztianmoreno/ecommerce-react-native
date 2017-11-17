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

class SetContents extends Component {

render(){
  var dataSaleThumb = [
    {
      id: 1,
      categories: 'Jacket and trousers',
      qty:383
    },
    {
      id: 2,
      categories: 'Jacket and waist...',
      qty:45
    }
  ];

    return (
      <Container>
           <Content padder bounces={true} scrollEnabled={true} showsVerticalScrollIndicator={false} style={{  padding:0 ,marginBottom:0}} >
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
export default SetContents;
