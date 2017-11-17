import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform
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
  CardItem,
  Body,
  Grid,
  Col
} from "native-base";
import { observer, inject } from "mobx-react/native";
import ListDropdown from "../CommonComponents/ListDropdown/index.js";
import RoundImageButton from "../CommonComponents/RoundImageButton/index.js";
import BannerSlider from "../CommonComponents/BannerSlider/index.js";
import Banner from "../CommonComponents/Banner/index.js";
import ThemeHeader from "../CommonComponents/Header/index.js";
import MyFooter from "../CommonComponents/Footer";
import data from "./data";
import commonColor from "../../theme/variables/commonColor.js";
import Style from "./style.js";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
var roundImageData = [
  {
    id: 1,
    roundImageSource: require("../../images/b4.jpg"),
    roundImageText: "MEN"
  },
  {
    id: 2,
    roundImageSource: require("../../images/b1.jpg"),
    roundImageText: "WOMEN"
  },
  {
    id: 3,
    roundImageSource: require("../../images/kidsThumb.jpg"),
    roundImageText: "KIDS"
  },
  {
    id: 4,
    roundImageSource: require("../../images/c4.jpg"),
    roundImageText: "SALE"
  },
  {
    id: 5,
    roundImageSource: require("../../images/home.jpg"),
    roundImageText: "HOME"
  },
  {
    id: 6,
    roundImageSource: require("../../images/c4.jpg"),
    roundImageText: "ESOS"
  }
];
var bannerSliderData = [
  {
    id: 1,
    bannerImageSource: require("../../images/1.jpg"),
    bannerImageText: "The Grunge Collection!",
    bannerSmallText: "Born For The Road"
  },
  {
    id: 2,
    bannerImageSource: require("../../images/b3.jpg"),
    bannerImageText: "On Point!",
    bannerSmallText: "Premium Bags That Steal The Spotlight"
  },
  {
    id: 3,
    bannerImageSource: require("../../images/b4.jpg"),
    bannerImageText: "A Fresh Edge To Everyday Wear",
    bannerSmallText: "Printed Tees"
  },
  {
    id: 4,
    bannerImageSource: require("../../images/1.jpg"),
    bannerImageText: "Up to 50% Off",
    bannerSmallText: "Explore The Sporty Side"
  },
  {
    id: 5,
    bannerImageSource: require("../../images/b5.jpg"),
    bannerImageText: "We Love Winters!",
    bannerSmallText: "Stay Warm & Cozy"
  }
];
var bannerSliderData1 = [
  {
    id: 1,
    bannerImageSource: require("../../images/1.jpg")
  },
  {
    id: 2,
    bannerImageSource: require("../../images/b3.jpg")
  },
  {
    id: 3,
    bannerImageSource: require("../../images/b4.jpg")
  },
  {
    id: 4,
    bannerImageSource: require("../../images/b2.jpg")
  },
  {
    id: 5,
    bannerImageSource: require("../../images/b5.jpg")
  }
];

@inject("view.app", "domain.user", "app", "routerActions")
@observer
class HomePage extends Component {
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    return (
      <Container>
        <ThemeHeader PageTitle="E-COMMERCE PRO" IconRight="search" />
        <Content
          padder
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Card style={Style.mainCategories}>
            <List
              removeClippedSubviews={false}
              contentContainerStyle={{ flexDirection: "row" }}
              directionalLockEnabled={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              dataArray={roundImageData}
              renderRow={item =>
                <RoundImageButton
                  navigation={navigation}
                  roundImageText={item.roundImageText}
                  roundImageSource={item.roundImageSource}
                />}
            />
          </Card>
          <Card>
            <CardItem
              cardBody
              button
              onPress={() => navigation.navigate("Product")}
              style={{ padding: 10 }}
            >
              <Image
                source={require("../../images/bannerSale.jpg")}
                style={{
                  resizeMode: "stretch",
                  maxHeight: deviceHeight / 2,
                  flex: 1,
                  width: null
                }}
              />
            </CardItem>
          </Card>
          <Card>
            <Text style={Style.bannerHeading}>Trending Now</Text>
            <List
              removeClippedSubviews={false}
              bounces={false}
              directionalLockEnabled={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              dataArray={bannerSliderData}
              renderRow={item =>
                <BannerSlider
                  onPress={() => navigation.navigate("ProductList")}
                  bannerImageText={item.bannerImageText}
                  bannerImageSource={item.bannerImageSource}
                  bannerSmallText={item.bannerSmallText}
                />}
            />
          </Card>
          <Card>
            <Text style={Style.bannerHeading}>Today's Pick</Text>
            <CardItem
              cardBody
              button
              onPress={() => navigation.navigate("Product")}
              style={{ padding: 7 }}
            >
              <Image
                source={require("../../images/b5.jpg")}
                style={{
                  resizeMode: "cover",
                  maxHeight: deviceHeight / 2,
                  flex: 1
                }}
              />
            </CardItem>
          </Card>
          <Card style={Style.scrollBanner}>
            <Text style={Style.bannerHeading}>Just In</Text>
            <List
              removeClippedSubviews={false}
              directionalLockEnabled={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              bounces={false}
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
                />}
            />
          </Card>
          <Card style={Style.scrollBanner}>
            <Text style={Style.bannerHeading}>
              Since you've shown interest in{" "}
              <Text style={{ color: commonColor.themeDefault }}>Tshirts</Text>
            </Text>
            <List
              removeClippedSubviews={false}
              directionalLockEnabled={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              dataArray={bannerSliderData}
              renderRow={item =>
                <BannerSlider
                  onPress={() => navigation.navigate("ProductList")}
                  bannerImageSource={item.bannerImageSource}
                />}
            />
            <CardItem style={{ paddingLeft: 7, paddingBottom: 0 }}>
              <Body>
                <Grid>
                  <Col size={70}>
                    <Text style={Style.sliderImageText}>
                      United Colors of Benetton
                    </Text>
                    <Text style={Style.smallText}>
                      United Colors of Benetton Men Coral Red Solid Polo Collar
                      T-shirt{" "}
                    </Text>
                  </Col>
                  <Col size={30}>
                    <Button
                      success
                      small
                      style={{ marginTop: 10, paddingHorizontal: 10 }}
                    >
                      <Text style={{ color: "#fff" }}> Buy Now </Text>
                    </Button>
                  </Col>
                </Grid>
              </Body>
            </CardItem>
            <CardItem style={{ paddingLeft: 7, paddingTop: 0 }}>
              <Text style={Style.price}> $900 </Text>
              <Text style={Style.cutOffPrice}>$1,499</Text>
              <Text style={Style.discount}> 40% off</Text>
            </CardItem>
          </Card>
          <Card style={Style.scrollBanner}>
            <Text style={Style.bannerHeading}>Just In</Text>
            <List
              removeClippedSubviews={false}
              directionalLockEnabled={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              bounces={false}
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
                />}
            />
          </Card>
        </Content>
        <MyFooter navigation={navigation} selected={"home"} />
      </Container>
    );
  }
}
export default HomePage;
