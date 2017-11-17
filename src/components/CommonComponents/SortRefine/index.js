import React, { Component } from "react";
import { View, Image, Dimensions, Modal, TouchableOpacity } from "react-native";
import { Text, Card, CardItem, Icon } from "native-base";
import Sort from "./Sort";
import Refine from "./Refine";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

class SortRefine extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          height: 50,
          width: deviceWidth,
          backgroundColor: "#fff",
          flexDirection: "row",
          borderBottomColor: "#ddd",
          borderBottomWidth: 1
        }}
      >
        <Sort />
        <View
          style={{
            alignItems: "center",
            height: 30,
            width: 1,
            backgroundColor: "#ddd"
          }}
        />
        <Refine />
      </View>
    );
  }
}
export default SortRefine;
