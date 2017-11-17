import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  ListView
} from "react-native";
import {
  Container,
  Content,
  Title,
  H1,
  H3,
  H4,
  Text,
  Header,
  Button,
  Icon,
  Card,
  CardItem,
  List,
  ListItem
} from "native-base";
import { inject } from "mobx-react/native";

import ThemeHeader from "../CommonComponents/Header";
import ListThumb from "../CommonComponents/ListThumb";
import SortRefine from "../CommonComponents/SortRefine";

import Style from "./style.js";
import MyFooter from "../CommonComponents/Footer";

@inject("routerActions")
class ProductList extends Component {
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    var dataSaleThumb = [
      {
        id: 1,
        imageSaleThumb: require("../../images/6.jpg"),
        brand: "Blackberrys",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 2,
        imageSaleThumb: require("../../images/7.jpg"),
        brand: "Van Heusen",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 3,
        imageSaleThumb: require("../../images/8.jpg"),
        brand: "Park Avenue",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 4,
        imageSaleThumb: require("../../images/6.jpg"),
        brand: "Raymond",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 5,
        imageSaleThumb: require("../../images/7.jpg"),
        brand: "V Dot",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 6,
        imageSaleThumb: require("../../images/8.jpg"),
        brand: "Louis Philippe",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 7,
        imageSaleThumb: require("../../images/6.jpg"),
        brand: "Raymond",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 8,
        imageSaleThumb: require("../../images/7.jpg"),
        brand: "V Dot",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 9,
        imageSaleThumb: require("../../images/8.jpg"),
        brand: "Louis Philippe",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 10,
        imageSaleThumb: require("../../images/6.jpg"),
        brand: "Blackberrys",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 11,
        imageSaleThumb: require("../../images/7.jpg"),
        brand: "Van Heusen",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      },
      {
        id: 12,
        imageSaleThumb: require("../../images/8.jpg"),
        brand: "Park Avenue",
        price: "$1,299",
        discount: "$500",
        discountedPrice: "$699",
        description: "Super Slim Fit Formal Suit"
      }
    ];
    return (
      <Container>
        <ThemeHeader
          PageTitle="PRODUCT LIST"
          PageSubTitle="6 Items"
          IconLeft="arrow-back"
          IconRight="search"
          route="product"
          navigation={navigation}
        />
        <View style={{ flex: 1, flexDirection: "column" }}>
          <SortRefine />
          <Content
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 50 }}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            <List
              bounces={false}
              contentContainerStyle={Style.listThumb}
              dataArray={dataSaleThumb}
              renderRow={item =>
                <ListThumb
                  navigation={navigation}
                  brand={item.brand}
                  price={item.price}
                  discount={item.discount}
                  discountedPrice={item.discountedPrice}
                  description={item.description}
                  imageSource={item.imageSaleThumb}
                />}
            />
          </Content>
        </View>
        <MyFooter navigation={navigation} selected={"categories"} />
      </Container>
    );
  }
}
export default ProductList;
