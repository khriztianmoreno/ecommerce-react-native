import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import {
  Text,
  Card,
  CardItem,
  Icon,
  Header,
  Button,
  Title,
  Footer,
  Container,
  Content,
  List,
  Tabs
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import ThemeHeader from "../../Header/index.js";
import Brand from "./Brand.js";
import Color from "./Color.js";
import Price from "./Price.js";
import Discount from "./Discount.js";
import CommonRefine from "./CommonRefine.js";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
import IconFA from "react-native-vector-icons/FontAwesome";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import commonColor from "../../../../theme/variables/commonColor.js";
class Refine extends Component {
  state = {
    component: "Brand",
    modalVisible: false,
    color: "#000"
  };

  // state = {
  //   modalVisible: false,
  // }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    var dataSaleThumb = [
      {
        id: 1,
        categories: "Brand"
      },
      {
        id: 2,
        categories: "Colour"
      },
      {
        id: 3,
        categories: "Price"
      },
      {
        id: 4,
        categories: "Discount"
      },
      {
        id: 5,
        categories: "Sizes"
      },
      {
        id: 6,
        categories: "Pattern"
      },
      {
        id: 7,
        categories: "Collar"
      },
      {
        id: 8,
        categories: "Fabric"
      },
      {
        id: 9,
        categories: "Set Contents"
      },
      {
        id: 10,
        categories: "Fit"
      },
      {
        id: 11,
        categories: "Occasion"
      }
    ];
    // console.log(this.state.component, '.....');
    return (
      <Container>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
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
                flexDirection: "row",
                paddingHorizontal: 6,
                paddingTop: 12,
                paddingBottom: 0,
                justifyContent: "space-between",
                backgroundColor: "#F9F9F9",
                borderBottomColor: "#aaa",
                borderBottomWidth: 0.5
              }}
            >
              <Button
                transparent
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Icon
                  style={{
                    color: "#000",
                    fontSize: 30,
                    marginLeft: 0,
                    marginBottom: -3,
                    justifyContent: "center"
                  }}
                  name="close"
                />
              </Button>
              <View
                style={{
                  width: deviceWidth,
                  marginLeft: -20,
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "300",
                    color: "#777",
                    paddingLeft: -50,
                    textAlign: "center"
                  }}
                >
                  FILTER BY
                </Text>
              </View>
            </View>
            <Grid>
              <Col
                size={1}
                style={{
                  backgroundColor: "#F5F5F6",
                  borderRightColor: "#ddd",
                  borderRightWidth: 1
                }}
              >
                <View>
                  <List
                    contentContainerStyle={{}}
                    dataArray={dataSaleThumb}
                    renderRow={item =>
                      // console.log(item.id);
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ component: item.categories });
                        }}
                      >
                        <View
                          style={{
                            padding: 12,
                            borderBottomColor: "#ddd",
                            borderBottomWidth: 1
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "300",
                              color:
                                this.state.component === item.categories
                                  ? commonColor.brandPrimary
                                  : "#000"
                            }}
                          >
                            {item.categories}
                          </Text>
                        </View>
                      </TouchableOpacity>}
                  />
                </View>
              </Col>
              <Col size={2} style={{ backgroundColor: "#FFFFFF" }}>
                <CommonRefine comp={this.state.component} />
              </Col>
            </Grid>
            <Footer
              style={{
                marginBottom: 0,
                height: 45,
                width: deviceWidth,
                borderTopWidth: 0,
                shadowColor: "#999",
                shadowRadius: 1,
                shadowOpacity: 0.2
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: deviceWidth,
                  alignItems: "center"
                }}
              >
                <Button
                  transparent
                  style={{
                    width: deviceWidth / 2,
                    alignSelf: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{ fontSize: 12, fontWeight: "500", color: "#777" }}
                  >
                    CLEAR ALL
                  </Text>
                </Button>
                <View
                  style={{
                    alignItems: "center",
                    height: 30,
                    width: 1,
                    backgroundColor: "#ddd"
                  }}
                />
                <Button
                  transparent
                  style={{
                    width: deviceWidth / 2,
                    alignSelf: "center",
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#7468c5"
                    }}
                  >
                    APPLY
                  </Text>
                </Button>
              </View>
            </Footer>
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
                REFINE
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({});
export default Refine;

// onPress={() => {this.setModalVisible(!this.state.modalVisible)}}

// {
//   console.log(item.id);
//   return(
//     <TouchableOpacity onPress={() => {
//       this.setState({component : item.categories});
//     } } >
//         <View style={{padding: 12, borderBottomColor: '#ddd', borderBottomWidth: 1}}><Text style={{fontSize: 12, fontWeight: '300', color: '#777'}}>{item.categories}</Text></View>
//     </TouchableOpacity>
//   );
// }}>
