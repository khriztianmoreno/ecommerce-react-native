import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  List,
  ListItem,
  InputGroup,
  Input,
  Icon,
  Card,
  CardItem
} from "native-base";
import { observer, inject } from "mobx-react/native";
import ListDropdown from "../CommonComponents/ListDropdown";
import ThemeHeader from "../CommonComponents/Header/index.js";
import MyFooter from "../CommonComponents/Footer";

import Style from "./style.js";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
@inject("view.app", "domain.user", "app", "routerActions")
@observer
class Shop extends Component {
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    var ListDropdownData = [
      {
        id: 1,
        value: "Topwear",
        sublist: ["T-Shirts", "Casual Shirts", "Formal Shirts"]
      },
      {
        id: 2,
        value: "Bottomwear",
        sublist: ["Jeans", "Casual Trousers", "Shorts", "Track Pants"]
      },
      {
        id: 3,
        value: "Sports & Active Wear",
        sublist: ["Active T-Shirts", "Track Pants", "Sport Pants"]
      },
      {
        id: 4,
        value: "Indian & Festive Wear",
        sublist: ["Active T-Shirts", "Track Pants", "Sport Pants"]
      },
      {
        id: 5,
        value: "Plus Size",
        sublist: ["Active T-Shirts", "Track Pants", "Sport Pants"]
      },
      {
        id: 6,
        value: "Footwear",
        sublist: ["Active T-Shirts", "Track Pants", "Sport Pants"]
      }
    ];
    return (
      <Container>
        <ThemeHeader
          PageTitle="SHOP MEN'S"
          IconLeft="arrow-back"
          IconRight="search"
          route="homepage"
          navigation={navigation}
        />
        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          style={{ backgroundColor: "#fff", marginBottom: 50 }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
            <Image
              style={Style.bannerImage}
              source={require("../../images/18.jpg")}
            />
            <Text style={Style.heading}>Winter Style Sorted</Text>
            <Text style={Style.subHeading}>Hand-Picked Authenticity</Text>
          </TouchableOpacity>
          <ListDropdown datas={ListDropdownData} navigation={navigation} />
        </Content>
        <MyFooter navigation={navigation} selected={"home"} />
      </Container>
    );
  }
}
export default Shop;
