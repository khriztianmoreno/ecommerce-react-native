import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  Item,
  Input,
  CardItem,
  Left,
  Body,
  Right,
  Badge,
  List,
  ListView,
  ListItem,
  Tabs,
  Tab,
  Footer
} from "native-base";
import {
  Image,
  Dimensions,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert
} from "react-native";
import { observer, inject } from "mobx-react/native";
import Swiper from "react-native-swiper";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
import ThemeHeader from "../CommonComponents/Header";
import ListDropdown from "../CommonComponents/ListDropdown";
@inject("view.app", "domain.user", "app", "routerActions")
@observer
class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveStatus: "SAVE",
      bagStatus: "ADD TO BAG",
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  toggle1() {
    this.setState({
      button1: !this.state.button1,
      button2: false,
      button3: false,
      button4: false
    });
  }
  toggle2() {
    this.setState({
      button2: !this.state.button2,
      button1: false,
      button3: false,
      button4: false
    });
  }
  toggle3() {
    this.setState({
      button3: !this.state.button3,
      button1: false,
      button2: false,
      button4: false
    });
  }
  toggle4() {
    this.setState({
      button4: !this.state.button4,
      button1: false,
      button2: false,
      button3: false
    });
  }
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    var items = [
      "More Green Sweaters",
      "More Sweaters",
      "More Black tshirts",
      "More Tshirts"
    ];
    return (
      <Container>
        <ThemeHeader
          PageTitle="PRODUCT"
          IconLeft="arrow-back"
          route="productList"
          navigation={navigation}
        />
        <Content
          style={{ backgroundColor: "#fff", marginBottom: 0 }}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View style={{ position: "relative" }}>
            <Swiper
              style={styles.wrapper}
              showsButtons={false}
              height={deviceHeight / 2.5}
              paginationStyle={styles.pagination}
              dot={<View style={styles.defaultDot} />}
              activeDot={<View style={styles.actDot} />}
            >
              <View style={styles.slide1}>
                <Image
                  source={require("../../images/b4.jpg")}
                  style={styles.pic}
                />
              </View>
              <View style={styles.slide2}>
                <Image
                  source={require("../../images/b5.jpg")}
                  style={styles.pic}
                />
              </View>
              <View style={styles.slide3}>
                <Image
                  source={require("../../images/b3.jpg")}
                  style={styles.pic}
                />
              </View>
            </Swiper>
            <Button
              style={{
                position: "absolute",
                bottom: 30,
                left: 10,
                padding: 10,
                backgroundColor: "rgba(255,255,255,0.3)"
              }}
              onPress={() =>
                Alert.alert("The model with height 1.7m is wearing size S")}
            >
              <Icon
                name="ios-information-circle-outline"
                style={{ color: "#111" }}
              />
            </Button>
          </View>
          <List>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.productName}> Black Leather Jacket</Text>
            </View>
            <ListItem style={{ marginLeft: 0, paddingLeft: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.price}> $1,499</Text>
                <Text style={styles.cutOffPrice}> $2,499</Text>
                <Text style={styles.discount}> 40% off</Text>
              </View>
            </ListItem>
            <ListItem button style={{ marginLeft: 0, paddingLeft: 10 }}>
              <Icon name="ios-pricetag" style={styles.priceTag} />
              <Text style={styles.tagText}> Tap to get the best price</Text>
            </ListItem>
          </List>
          <View style={{ paddingTop: 10 }}>
            <View style={styles.sizeView}>
              <View style={styles.sizeView1}>
                <IconMCI name="ruler" style={styles.rulerIcon} />
              </View>
              <View style={styles.sizeView2}>
                <Text style={styles.sizeText}> Size </Text>
              </View>
              <View style={styles.sizeView3}>
                <Text style={styles.chartText}>SIZE CHART</Text>
              </View>
            </View>
            <View style={styles.sizeButtons}>
              <TouchableOpacity
                style={!this.state.button1 ? styles.sizes : styles.sizesAlt}
                onPress={() => this.toggle1()}
              >
                <Text style={!this.state.button1 ? {} : { color: "#7468C5" }}>
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={!this.state.button2 ? styles.sizes : styles.sizesAlt}
                onPress={() => this.toggle2()}
              >
                <Text style={!this.state.button2 ? {} : { color: "#7468C5" }}>
                  M
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={!this.state.button3 ? styles.sizes : styles.sizesAlt}
                onPress={() => this.toggle3()}
              >
                <Text style={!this.state.button3 ? {} : { color: "#7468C5" }}>
                  L
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={!this.state.button4 ? styles.sizes : styles.sizesAlt}
                onPress={() => this.toggle4()}
              >
                <Text style={!this.state.button4 ? {} : { color: "#7468C5" }}>
                  XL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Tabs style={{ paddingHorizontal: 0 }}>
              <Tab heading="DETAILS" style={{ padding: 10 }}>
                <Text style={{ color: "#777", textAlign: "justify" }}>
                  Stay warm and trendy this winter with this trendy sweater from
                  Anouk. Layer it on a tee, or just team it with a pair of jeans
                  and boots when you head out this winter.
                </Text>
              </Tab>
              <Tab heading="MATERIAL & CARE" style={{ padding: 10 }}>
                <Text style={{ color: "#777" }}>
                  76% acrylic, 19% polyester, 5% metallic yarn Hand-wash cold
                </Text>
              </Tab>
            </Tabs>
          </View>
          <View>
            <Text style={{ padding: 10, fontSize: 14, color: "#777" }}>
              STYLE NOTE
            </Text>
            <View
              style={{
                padding: 10,
                paddingTop: 5,
                borderTopWidth: 1,
                borderTopColor: "#ddd"
              }}
            >
              <Text
                style={{ color: "#777", fontSize: 14, textAlign: "justify" }}
              >
                Fashion has taken today’s youth by surprise, and the
                availability of numerous options just leaves them spoilt of
                choice. Online stores fuel fashion by making the latest trending
                dresses, accessories, and apparels available to you within a few
                clicks. Shopping is no longer a day long affair with online
                shopping
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ padding: 10, fontSize: 14, color: "#777" }}>
              MORE INFO
            </Text>
            <View
              style={{ padding: 10, borderTopWidth: 1, borderTopColor: "#ddd" }}
            >
              <Text style={{ color: "#777" }}>Product Code: 1760167</Text>
              <Text style={{ color: "#777" }}>Sold By: Funfash</Text>
              <Text style={{ color: "#777" }}>
                Tax info: Applicable VAT will be charged at the time of checkout
              </Text>
            </View>
          </View>
        </Content>
        <Footer>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => this.setState({ saveStatus: "SAVED" })}
            >
              <IconSLI name="list" style={styles.listIcon} />
              <Text style={styles.saveText}>
                {" "}{this.state.saveStatus}{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bagButton}
              onPress={() =>
                this.state.button1 ||
                this.state.button2 ||
                this.state.button3 ||
                this.state.button4
                  ? navigation.navigate("BAG")
                  : Alert.alert("Please select Size")}
            >
              <IconSLI name="handbag" style={styles.bagIcon} />
              <Text style={styles.bagText}> GO TO BAG</Text>
            </TouchableOpacity>
          </View>
        </Footer>
      </Container>
    );
  }
}
var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  sizes: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderColor: "#B2BAB5",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 10
  },
  sizesAlt: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderColor: "#7468C5",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 10
  },
  backArrow: {
    color: "#9FA29F"
  },
  titleText: {
    color: "#9FA29F"
  },
  bag: {
    fontSize: 25,
    color: "#9FA29F"
  },
  more: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#9FA29F"
  },
  pagination: {
    bottom: 5
  },
  defaultDot: {
    backgroundColor: "#ddd",
    opacity: 1,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  actDot: {
    backgroundColor: "black",
    opacity: 1,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  pic: {
    flex: 1,
    resizeMode: "contain",
    alignSelf: "center"
  },
  info: {
    position: "absolute",
    bottom: 330,
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center"
  },
  infoIcon: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#ddd"
  },
  view1: {
    marginTop: 25,
    backgroundColor: "white"
  },
  productName: {
    fontSize: 16,
    color: "#090909",
    marginLeft: 10
  },
  price: {
    fontSize: 16,
    color: "black"
  },
  cutOffPrice: {
    fontSize: 16,
    color: "#898C94",
    marginLeft: 10,
    textDecorationLine: "line-through"
  },
  discount: {
    fontSize: 16,
    color: "#7468C5",
    marginLeft: 10
  },
  priceTag: {
    fontSize: 16,
    color: "#999"
  },
  tagText: {
    color: "#999",
    alignSelf: "center",
    marginTop: -4
  },
  sizeView: {
    flex: 1,
    flexDirection: "row"
  },
  sizeView1: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 10
  },
  rulerIcon: {
    fontSize: 18,
    color: "#999"
  },
  sizeView2: {
    flex: 2,
    alignItems: "flex-start"
  },
  sizeText: {
    color: "#999",
    marginLeft: -15,
    marginTop: 0
  },
  sizeView3: {
    flex: 8,
    alignItems: "flex-end",
    marginRight: 10
  },
  chartText: {
    fontSize: 12,
    color: "#7468C5"
  },
  sizeButtons: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 0,
    paddingVertical: 10
  },
  footer: {
    flex: 1,
    flexDirection: "row"
  },
  saveButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#535766",
    alignItems: "center",
    justifyContent: "center"
  },
  listIcon: {
    fontSize: 20,
    color: "white"
  },
  saveText: {
    fontSize: 16,
    color: "white"
  },
  bagButton: {
    flex: 1.5,
    flexDirection: "row",
    backgroundColor: "#14CDA8",
    alignItems: "center",
    justifyContent: "center"
  },
  bagIcon: {
    fontSize: 16,
    color: "white"
  },
  bagText: {
    fontSize: 16,
    color: "white"
  }
};
export default ProductPage;
