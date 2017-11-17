import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
import { View, Text, Card, CardItem, Container, Content } from "native-base";
// import myTheme from '../../../themes/themeLight';

var deviceWidth = Dimensions.get("window").width;

class SaleTitle extends Component {
  render() {
    // var imageSource = require("../../../assets/images/saleThumb1.png");
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignSelf: "center",
          margin: 18,
          marginBottom: 0
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignSelf: "center" }}>
          <View
            style={{
              height: 2,
              width: 30,
              backgroundColor: "#111",
              marginTop: 8
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "700",
              fontStyle: "italic",
              marginLeft: 10,
              marginRight: 10
            }}
          >
            {this.props.saleTitle}
          </Text>
          <View
            style={{
              height: 2,
              width: 30,
              backgroundColor: "#111",
              marginTop: 8
            }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "500",
            marginBottom: 8
          }}
        >
          {this.props.saleSubTitle}
        </Text>
      </View>
    );
  }
}
export default SaleTitle;
