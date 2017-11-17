import React, { Component } from "react";
import {
  View,
  H1,
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
  Thumbnail,
  Body,
  Text,
  Left,
  Right,
  Grid,
  Col
} from "native-base";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { observer, inject } from "mobx-react/native";
import ThemeHeader from "../CommonComponents/Header/index.js";
import commonColor from "../../theme/variables/commonColor.js";
import MyFooter from "../CommonComponents/Footer";

@inject("view.app", "domain.user", "app", "routerActions")
@observer
class ConfirmAddress extends Component {
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    return (
      <Container>
        <ThemeHeader
          PageTitle="CONFIRM"
          IconLeft="arrow-back"
          route="saveAddress"
          navigation={navigation}
        />
        <Content
          style={{ marginBottom: 50 }}
          padder
          contentContainerStyle={{ paddingBottom: 15 }}
        >
          <Text style={{ fontSize: 12, color: "#555", fontWeight: "500" }}>
            CONFIRM ADDRESS{" "}
          </Text>
          <Card style={{ paddingHorizontal: 10 }}>
            <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
              <Body>
                <Text style={{ fontSize: 13, color: "#777" }}>
                  Flat Abc,{"\n"}
                  Xyz Apartment,{"\n"}
                  123 Main Road,{"\n"}
                  XX Sector, ZZ Layout,{"\n"}
                  AAA City,{"\n"}
                  State, -- 111111
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingHorizontal: 0 }}>
              <Grid>
                <Col>
                  <Button light block style={{ marginRight: 10 }}>
                    <Text style={{ fontSize: 12 }}>Edit/Change Address</Text>
                  </Button>
                </Col>
                <Col>
                  <Button light block>
                    <Text style={{ fontSize: 12 }}>Add New Address</Text>
                  </Button>
                </Col>
              </Grid>
            </CardItem>
          </Card>
          <Text
            style={{
              fontSize: 12,
              color: "#555",
              fontWeight: "500",
              marginTop: 10
            }}
          >
            ESTIMATED DELIVERY TIME{" "}
          </Text>
          <Card>
            <List>
              <ListItem style={{ flex: 1, marginLeft: 0 }}>
                <Thumbnail
                  square
                  size={40}
                  source={require("../../images/6.jpg")}
                  style={{ marginRight: 10, resizeMode: "contain" }}
                />
                <Text style={{ fontSize: 13, color: "#555", flex: 1 }}>
                  Estimated Delivery Date:{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#555",
                    fontWeight: "bold",
                    flex: 1,
                    textAlign: "right",
                    marginTop: 10
                  }}
                >
                  20 Feb 2017
                </Text>
              </ListItem>
              <ListItem style={{ flex: 1, marginLeft: 0 }}>
                <Thumbnail
                  square
                  size={40}
                  source={require("../../images/7.jpg")}
                  style={{ marginRight: 10, resizeMode: "contain" }}
                />
                <Text style={{ fontSize: 13, color: "#555", flex: 1 }}>
                  Estimated Delivery Date:{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#555",
                    fontWeight: "bold",
                    flex: 1,
                    textAlign: "right",
                    marginTop: 10
                  }}
                >
                  22 Feb 2017
                </Text>
              </ListItem>
            </List>
          </Card>
          <Text
            style={{
              fontSize: 12,
              color: "#555",
              fontWeight: "500",
              marginTop: 10
            }}
          >
            ORDER SUMMARY
          </Text>
          <Card>
            <List>
              <ListItem
                itemHeader
                style={{
                  paddingTop: 10,
                  marginLeft: 0,
                  paddingLeft: 10,
                  paddingBottom: 10
                }}
              >
                <Text style={{ fontSize: 12, color: "#555" }}>2 ITEMS</Text>
              </ListItem>
              <ListItem icon style={{ marginLeft: 0 }}>
                <Left style={{ borderBottomWidth: 0 }}>
                  <Text style={{ fontSize: 13, color: "#555" }}>
                    Order Total
                  </Text>
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text style={{ fontSize: 13, color: "#555" }} />
                </Body>
                <Right style={{ borderBottomWidth: 0 }}>
                  <Text style={{ fontSize: 13, color: "#555" }}>$1,598</Text>
                </Right>
              </ListItem>
              <ListItem icon style={{ marginLeft: 0 }}>
                <Left style={{ borderBottomWidth: 0 }}>
                  <Text style={{ fontSize: 13, color: "#555" }}>Delivery</Text>
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text />
                </Body>
                <Right style={{ borderBottomWidth: 0 }}>
                  <Text
                    style={{ fontSize: 13, color: commonColor.brandSuccess }}
                  >
                    FREE
                  </Text>
                </Right>
              </ListItem>
              <ListItem icon style={{ marginLeft: 0 }}>
                <Left style={{ borderBottomWidth: 0 }}>
                  <Text style={{ fontSize: 13, color: "#555" }}>
                    Total Payable
                  </Text>
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text />
                </Body>
                <Right style={{ borderBottomWidth: 0 }}>
                  <Text
                    style={{ fontSize: 13, color: "#555", fontWeight: "bold" }}
                  >
                    $1,598
                  </Text>
                </Right>
              </ListItem>
            </List>
          </Card>
          <Button
            primary
            block
            onPress={() => navigation.navigate("PaymentOptions")}
            style={{ marginTop: 10, marginBottom: 15 }}
          >
            <Text>
              {" "}{"continue to payment".toUpperCase()}
            </Text>
          </Button>
        </Content>
        <MyFooter navigation={navigation} selected={"bag"} />
      </Container>
    );
  }
}
export default ConfirmAddress;
