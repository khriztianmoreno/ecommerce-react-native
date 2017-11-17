import React, { Component } from "react";
import { View, Image, Dimensions, Modal, TouchableOpacity } from "react-native";
import { Text, Card, CardItem, Icon } from "native-base";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

class Sort extends Component {
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
          flex: 1,
          flexDirection: "row",
          width: deviceWidth / 2,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              height: deviceHeight,
              width: deviceWidth,
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: 40
            }}
          >
            <TouchableOpacity
              style={{ height: deviceHeight / 2 + 20, width: deviceWidth }}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <View />
            </TouchableOpacity>
            <View
              style={{
                height: deviceHeight / 2 + 20,
                width: deviceWidth,
                backgroundColor: "#fff",
                alignItems: "center",
                borderTopColor: "#333",
                borderTopWidth: 0.5,
                shadowColor: "#777",
                shadowOpacity: 0.2,
                shadowRadius: 1
              }}
            >
              <View
                style={{
                  width: deviceWidth,
                  borderBottomColor: "#ddd",
                  borderBottomWidth: 1,
                  padding: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "300",
                    color: "#aaa",
                    textAlign: "center"
                  }}
                >
                  SORT BY
                </Text>
              </View>
              <TouchableOpacity
                style={{ width: deviceWidth }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 15,
                      padding: 12,
                      fontWeight: "500",
                      color: "#7468C5",
                      textAlign: "center"
                    }}
                  >
                    Popularity
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: deviceWidth }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      padding: 12,
                      fontWeight: "300",
                      color: "#777",
                      textAlign: "center"
                    }}
                  >
                    New
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: deviceWidth }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      padding: 12,
                      fontWeight: "300",
                      color: "#777",
                      textAlign: "center"
                    }}
                  >
                    Discount
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: deviceWidth }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      padding: 12,
                      fontWeight: "300",
                      color: "#777",
                      textAlign: "center"
                    }}
                  >
                    Price: High - Low
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: deviceWidth }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      padding: 12,
                      fontWeight: "300",
                      color: "#777",
                      textAlign: "center"
                    }}
                  >
                    Price: Low - High
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View
            style={{
              height: deviceHeight / 13,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              style={{ color: "#555", fontWeight: "300", fontSize: 24 }}
              name="ios-arrow-down"
            />
            <Text
              style={{
                color: "#555",
                fontWeight: "300",
                marginLeft: 8,
                paddingBottom: 2,
                fontSize: 12
              }}
            >
              SORT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Sort;
