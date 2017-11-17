import React,{Component} from 'react';
import { View, H1, Text ,InputGroup,Input,Icon, Header,Container,Button,List, ListItem,Badge,Title} from 'native-base';
import { ScrollView ,TouchableOpacity,Image,Dimensions,StyleSheet} from 'react-native';
var {height, width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
var styles = StyleSheet.create({
  wrapper: {
    height:200,
  },
  slide1: {
    height:400,

  },
  slide2: {

    height:400,
    backgroundColor: '#97CAE5',
  },
  slide3: {

    height:400,
   backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight:40,
  }
})

class DotSwiper extends Component{
 render(){
return(


                <Swiper height={440}  showsButtons={false} paginationStyle={{}}>
                        <View style={styles.slide1}>
                        <Image
                        style={{ flex:1, resizeMode: 'stretch' ,alignSelf:'center'}}
                        source={require('./../../../images/frontlogo.png')}
                        />
                        </View>
                        <View style={styles.slide2}>
                        <Image
                        style={{ flex:1, resizeMode: 'stretch' ,alignSelf:'center'}}
                        source={require('./../../../images/frontlogo.png')}
                        />
                        </View>
                        <View style={styles.slide3}>
                        <Image
                        style={{ flex:1, resizeMode: 'stretch' ,alignSelf:'center'}}
                        source={require('./../../../images/frontlogo.png')}
                        />
                        </View>
                      </Swiper>



);

 }


}
export default DotSwiper;
