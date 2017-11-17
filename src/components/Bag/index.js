import React, { Component } from "react";
import {
  Container,
  Text,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Badge,
  List,
  ListView,
  ListItem,
  Left,
  Right,
  Body
} from "native-base";
import {
  Image,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import { inject } from "mobx-react/native";
import Style from "./style.js";
import ThemeHeader from "../CommonComponents/Header/index.js";
import BagItems from "../CommonComponents/BagItems";
import MyFooter from "../CommonComponents/Footer";

@inject("routerActions")
class Bag extends Component {
  render() {
    const navigation = this.props.navigation;
    var dataNotification = [
      {
        id: 1,
        imageSaleThumb: require("../../images/6.jpg"),
        price: "$1,299",
        product: "FabAlley Women Gray Classic Fit Casul Top",
        description: "Budget-Approved Styles | Only for 2 hours! Hurry!",
        soldby: "Funfash"
      },
      {
        id: 2,
        imageSaleThumb: require("../../images/7.jpg"),
        price: "$1,299",
        product: "FabAlley Women Black Classic Fit Casul Top",
        description: "Budget-Approved Styles | Only for 2 hours! Hurry!",
        soldby: "Funfash"
      }
    ];
    const { routerActions } = this.props;
    return (
      <Container>
        <ThemeHeader PageTitle="MY BAG" />
        <Content
          padder
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View style={Style.bagTopContent}>
            <View>
              <Text style={Style.textMuted}>ITEMS (2)</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={Style.textMutedLight}>TOTAL:</Text>
              <Text style={Style.textMuted}> $ 1,598</Text>
            </View>
          </View>
          <List
            removeClippedSubviews={false}
            dataArray={dataNotification}
            renderRow={item =>
              <BagItems
                product={item.product}
                description={item.description}
                soldby={item.soldby}
                id={item.id}
                imageSource={item.imageSaleThumb}
                imageSourceNotify={item.imageSaleNotify}
                price={item.price}
              />}
          />
          <View style={{ marginVertical: 10 }}>
            <Text style={Style.textMutedLight}>OPTIONS</Text>
            <Card>
              <ListItem icon style={{ marginLeft: 0 }}>
                <Left
                  style={{ borderBottomWidth: 0.5, borderBottomColor: "#ccc" }}
                >
                  <Icon
                    name="ios-flower-outline"
                    style={{ color: "#777", fontSize: 20, paddingLeft: 10 }}
                  />
                </Left>
                <Body>
                  <Text
                    style={{ color: "#777", fontSize: 12, fontWeight: "500" }}
                  >
                    Apply Coupon
                  </Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon style={{ marginLeft: 0 }}>
                <Left>
                  <Icon
                    name="ios-lock-outline"
                    style={{ color: "#777", fontSize: 20, paddingLeft: 10 }}
                  />
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text
                    style={{ color: "#777", fontSize: 12, fontWeight: "500" }}
                  >
                    Apply Coupon
                  </Text>
                </Body>
                <Right style={{ borderBottomWidth: 0 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </Card>
          </View>
          <View>
            <Text style={Style.textMutedLight}>PRICE DETAILS</Text>
            <Card>
              <ListItem style={{ marginLeft: 0 }}>
                <Left>
                  <Text style={Style.textMutedLight}>Bag Total</Text>
                </Left>
                <Right>
                  <Text style={Style.textMutedLight}>$ 2,598</Text>
                </Right>
              </ListItem>
              <ListItem style={{ marginLeft: 0 }}>
                <Left>
                  <Text style={Style.textMutedLight}>Bag Discount</Text>
                </Left>
                <Right>
                  <Text style={Style.discountedText}>- $ 1,000</Text>
                </Right>
              </ListItem>
              <ListItem style={{ marginLeft: 0 }}>
                <Left>
                  <Text style={Style.textMutedLight}>Sub Total</Text>
                </Left>
                <Right>
                  <Text style={Style.textMutedLight}>$ 1,598</Text>
                </Right>
              </ListItem>
              <ListItem style={{ marginLeft: 0 }}>
                <Left>
                  <Text style={Style.textMutedLight}>Coupon Discount</Text>
                </Left>
                <Right>
                  <Text style={Style.textMutedLight}>0</Text>
                </Right>
              </ListItem>
              <ListItem style={{ marginLeft: 0 }}>
                <Left>
                  <Text style={Style.textMutedLight}>Total Payable</Text>
                </Left>
                <Right>
                  <Text style={Style.price}>$ 1,598</Text>
                </Right>
              </ListItem>
            </Card>
          </View>
          <Button
            primary
            block
            onPress={() => this.props.navigation.navigate("SaveAddress")}
            style={{ marginTop: 10, marginBottom: 15 }}
          >
            <Text> PLACE ORDER </Text>
          </Button>
        </Content>
        <MyFooter navigation={navigation} selected={"bag"} />
      </Container>
    );
  }
}
export default Bag;
