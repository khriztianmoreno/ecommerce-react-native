import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Content,
  Title,
  H1,
  H3,
  Text,
  Header,
  Button,
  Icon,
  Card,
  CardItem,
  List,
  ListItem
} from "native-base";
import { observer, inject } from "mobx-react/native";

import ThemeHeader from "../CommonComponents/Header/index.js";
import ThemeFooter from "../CommonComponents/Footer/index.js";
import SaleThumb from "../CommonComponents/SaleThumb/index.js";
import SaleTitle from "../CommonComponents/SaleTitle/index.js";
import SaleFlex from "../CommonComponents/SaleFlex/index.js";
import SaleBrandThumb from "../CommonComponents/SaleBrandThumb/index.js";
import MyFooter from "../CommonComponents/Footer";

import Style from "./style.js";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

@inject("view.app", "domain.user", "app", "routerActions")
@observer
class Product extends Component {
  render() {
    // console.log(theme.headerBg, "{{{{}}}}");
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;

    var imageFlex = new Array(
      require("../../images/loginCover.png"),
      require("../../images/loginCover.png")
    );
    var dataSaleThumb = [
      {
        id: 1,
        imageSaleThumb: require("../../images/1.jpg"),
        text: "30 - 50% Off"
      },
      {
        id: 2,
        imageSaleThumb: require("../../images/2.jpg"),
        text: "Up to 60% Off"
      },
      {
        id: 3,
        imageSaleThumb: require("../../images/3.jpg"),
        text: "30 - 50% Off"
      },
      {
        id: 4,
        imageSaleThumb: require("../../images/4.jpg"),
        text: "Up to 30% Off"
      },
      {
        id: 5,
        imageSaleThumb: require("../../images/b1.jpg"),
        text: "30 - 50% Off"
      },
      {
        id: 6,
        imageSaleThumb: require("../../images/13.jpg"),
        text: "40 - 70% Off"
      },
      {
        id: 7,
        imageSaleThumb: require("../../images/b2.jpg"),
        text: "30 - 50% Off"
      },
      {
        id: 8,
        imageSaleThumb: require("../../images/5.jpg"),
        text: "Up to 60% Off"
      },
      {
        id: 9,
        imageSaleThumb: require("../../images/4.jpg"),
        text: "30 - 50% Off"
      }
    ];
    var dataSaleBrand = [
      {
        id: 1,
        imageSaleThumb: require("../../images/brandLogo.jpg"),
        text: "Min. 50% Off"
      },
      {
        id: 2,
        imageSaleThumb: require("../../images/brandLogo2.jpg"),
        text: "Flat 60% Off"
      },
      {
        id: 3,
        imageSaleThumb: require("../../images/brandLogo.jpg"),
        text: "Min. 50% Off"
      },
      {
        id: 4,
        imageSaleThumb: require("../../images/brandLogo2.jpg"),
        text: "Flat 60% Off"
      },
      {
        id: 5,
        imageSaleThumb: require("../../images/brandLogo.jpg"),
        text: "Min. 50% Off"
      },
      {
        id: 6,
        imageSaleThumb: require("../../images/brandLogo2.jpg"),
        text: "Flat 60% Off"
      },
      {
        id: 7,
        imageSaleThumb: require("../../images/brandLogo.jpg"),
        text: "Min. 50% Off"
      },
      {
        id: 8,
        imageSaleThumb: require("../../images/brandLogo2.jpg"),
        text: "Flat 60% Off"
      },
      {
        id: 9,
        imageSaleThumb: require("../../images/brandLogo.jpg"),
        text: "Flat 60% Off"
      }
    ];
    return (
      <Container>
        <ThemeHeader
          PageTitle="PRODUCT"
          IconLeft="arrow-back"
          route="homepage"
          IconRight="search"
          navigation={navigation}
        />
        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          style={{ marginBottom: 50 }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
            <SaleFlex imageFlexSource={imageFlex[0]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
            <SaleTitle saleTitle="Last Chance of Stock Up" />
          </TouchableOpacity>
          <View>
            <List
              bounces={false}
              contentContainerStyle={Style.saleThumb}
              dataArray={dataSaleThumb}
              renderRow={item =>
                <SaleThumb
                  navigation={navigation}
                  blockHeight={deviceHeight / 3 - 45}
                  blockWidth={deviceWidth / 3 - 10}
                  onPress={() => navigation.navigate("ProductList")}
                  saleData={item.text}
                  imageSource={item.imageSaleThumb}
                />}
            />
          </View>
          <SaleFlex imageFlexSource={imageFlex[1]} />
          <SaleTitle saleTitle="Shop Categories" saleSubTitle="30 - 70% Off" />
          <View>
            <List
              bouces={false}
              contentContainerStyle={Style.saleThumb}
              dataArray={dataSaleThumb}
              renderRow={item =>
                <SaleThumb
                  navigation={navigation}
                  blockHeight={deviceHeight / 3 - 45}
                  blockWidth={deviceWidth / 3 - 10}
                  imageSource={item.imageSaleThumb}
                  saleData={item.text}
                />}
            />
          </View>
          <SaleTitle saleTitle="Shop More Brands" />
          <View>
            <List
              bounces={false}
              contentContainerStyle={Style.saleThumb}
              dataArray={dataSaleBrand}
              renderRow={item =>
                <SaleBrandThumb
                  saleData={item.text}
                  imageSource={item.imageSaleThumb}
                  navigation={navigation}
                />}
            />
          </View>
        </Content>
        <MyFooter navigation={navigation} selected={"home"} />
      </Container>
    );
  }
}
export default Product;
