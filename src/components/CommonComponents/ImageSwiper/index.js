import React,{Component} from 'react';
import { View, H1, Text ,InputGroup,Input,Icon, Header,Container,Button,List, ListItem,Badge,Title} from 'native-base';
import { ScrollView ,TouchableOpacity,Image,Dimensions,StyleSheet} from 'react-native';
var {height, width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import DotSwiper from './DotSwiper';
var styles = StyleSheet.create({
  wrapper: {
    height:200,
  },
  slide1: {
    height:200,

  },
  slide2: {

    height:200,
    backgroundColor: '#97CAE5',
  },
  slide3: {

    height:200,
   backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight:40,
  }
})

class HZSwiper extends Component{
 render(){
return(

<Container>
<Header>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>

                    <Title>Header</Title>

                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <View>

                <DotSwiper/>
<View style={{backgroundColor:'white',height:60,width:60,marginTop:-120,marginLeft:15,borderRadius:10}}>

</View>

                </View>
</Container>

);

 }


}
export default HZSwiper;