import React, { Component } from "react";
import {
  View,
  H1,
  Text,
  InputGroup,
  Input,
  Icon,
  Header,
  Container,
  Button,
  List,
  ListItem,
  Badge,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Title,
  Body,
  Grid,
  Col
} from "native-base";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform
} from "react-native";
import MyFooter from "../CommonComponents/Footer";
import BannerSlider from "../CommonComponents/BannerSlider/index.js";
import ListDropdown from "../CommonComponents/ListDropdown";
import ThemeHeader from "../CommonComponents/Header/index.js";
import { observer, inject } from "mobx-react/native";
import Style from "./style.js";
var { height, width } = Dimensions.get("window");
var deviceWidth = Dimensions.get("window").width;
@inject("view.app", "domain.user", "app", "routerActions")
@observer
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryDrop: null
    };
  }
  categoryDropdown(id) {
    if (this.state.categoryDrop === id) {
      this.setState({ categoryDrop: null });
      this.setState({ arrowDirection: "ios-arrow-dropdown-outline" });
      return;
    }
    this.setState({ categoryDrop: id });
  }
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    var ListDropdownData = [
      {
        id: 1,
        value: "Women",
        sublist: ["Kurta & Suits", "Top & Tees", "Dresses"]
      },
      {
        id: 2,
        value: "Men",
        sublist: ["T-Shirts", "Shirts", "Jeans", "Shoes"]
      },
      {
        id: 3,
        value: "Kids",
        sublist: ["Brands", "Clothing", "Footwear"]
      },
      {
        id: 4,
        value: "Home & Living",
        sublist: ["Bedsheets", "Blankets", "Towels"]
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
        <ThemeHeader PageTitle="CATEGORIES" IconRight="search" />
        <Content showsVerticalScrollIndicator={false}>
          <Card>
            <CardItem style={{ padding: 0 }}>
              <ListDropdown navigation={navigation} datas={ListDropdownData} />
            </CardItem>
          </Card>
          <Card>
            <CardItem
              style={{ paddingLeft: 0, paddingBottom: 0, marginLeft: 0 }}
            >
              <Left>
                <Text style={{ fontSize: 14, color: "#696d79" }}>
                  RECENTLY VIEWED
                </Text>
              </Left>
              <Right>
                <TouchableOpacity>
                  <Text style={Style.clearAll}>CLEAR ALL</Text>
                </TouchableOpacity>
              </Right>
            </CardItem>
            <CardItem style={{ paddingHorizontal: 5, paddingVertical: 0 }}>
              <ScrollView
                directionalLockEnabled={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <List
                  removeClippedSubviews={false}
                  bounces={false}
                  contentContainerStyle={{ flex: 1, flexDirection: "row" }}
                  dataArray={data}
                  renderRow={item =>
                    <BannerSlider
                      imageStyle={{
                        height: 100,
                        width: 170,
                        resizeMode: "stretch"
                      }}
                      onPress={() => navigation.navigate("ProductList")}
                      bannerImageText={item.bannerImageText}
                      bannerImageSource={item.bannerImageSource}
                      bannerSmallText={item.bannerSmallText}
                      navigation={navigation}
                    />}
                />
              </ScrollView>
            </CardItem>
          </Card>
          <View style={Style.contactList}>
            <ListItem style={Style.noBorder}>
              <Text style={Style.contactListItem}>Contact Us</Text>
            </ListItem>
            <ListItem style={Style.noBorder}>
              <Text style={Style.contactListItem}>FAQs</Text>
            </ListItem>
            <ListItem style={Style.noBorder}>
              <Text style={Style.contactListItem}>About Us</Text>
            </ListItem>
            <ListItem style={Style.noBorder}>
              <Text style={Style.contactListItem}>Terms of use</Text>
            </ListItem>
          </View>
        </Content>
        <MyFooter navigation={navigation} selected={"categories"} />
      </Container>
    );
  }
}
export default Category;
