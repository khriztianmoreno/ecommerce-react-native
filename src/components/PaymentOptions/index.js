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
  Left,
  Right,
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
  Text,
  Alert
} from "react-native";
import { observer, inject } from "mobx-react/native";
import ThemeHeader from "../CommonComponents/Header/index.js";
var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;
import commonColor from "../../theme/variables/commonColor.js";
import MyFooter from "../CommonComponents/Footer";

@inject("view.app", "domain.user", "app", "routerActions")
@observer
class PaymentOption extends Component {
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    return (
      <Container>
        <ThemeHeader
          PageTitle="PAYMENT"
          IconLeft="arrow-back"
          route="confirmAddress"
          navigation={navigation}
        />
        <Content
          style={{ marginBottom: 50 }}
          contentContainerStyle={{ paddingBottom: 10 }}
          padder
        >
          <Card>
            <CardItem style={{ justifyContent: "space-between" }}>
              <Text>You Pay</Text>
              <Text>$1,598</Text>
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
            {"Other payment options".toUpperCase()}
          </Text>
          <Card>
            <CardItem style={{ justifyContent: "space-between" }}>
              <Text style={{ fontSize: 13, color: "#555", fontWeight: "500" }}>
                Credit/Debit Card
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: commonColor.brandPrimary,
                  fontWeight: "bold"
                }}
              >
                SELECT
              </Text>
            </CardItem>
            <CardItem style={{ justifyContent: "space-between" }}>
              <Text style={{ fontSize: 13, color: "#555", fontWeight: "500" }}>
                Net Banking
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: commonColor.brandPrimary,
                  fontWeight: "bold"
                }}
              >
                SELECT
              </Text>
            </CardItem>
            <CardItem style={{ justifyContent: "space-between" }}>
              <Text style={{ fontSize: 13, color: "#555", fontWeight: "500" }}>
                Cash On Delivery
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: commonColor.brandPrimary,
                  fontWeight: "bold"
                }}
              >
                SELECT
              </Text>
            </CardItem>
            <CardItem style={{ justifyContent: "space-between" }}>
              <Text style={{ fontSize: 13, color: "#555", fontWeight: "500" }}>
                Wallets
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: commonColor.brandPrimary,
                  fontWeight: "bold"
                }}
              >
                SELECT
              </Text>
            </CardItem>
            <CardItem style={{ justifyContent: "space-between" }}>
              <Text style={{ fontSize: 13, color: "#555", fontWeight: "500" }}>
                EMI (Credit Card)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: commonColor.brandPrimary,
                  fontWeight: "bold"
                }}
              >
                SELECT
              </Text>
            </CardItem>
            <CardItem style={{ justifyContent: "space-between" }}>
              <Text style={{ fontSize: 13, color: "#555", fontWeight: "500" }}>
                Gift Card
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: commonColor.brandPrimary,
                  fontWeight: "bold"
                }}
              >
                SELECT
              </Text>
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
            {"Order Summary".toUpperCase()}
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
              <ListItem icon>
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
              <ListItem icon>
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
              <ListItem icon>
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
          <Text
            style={{
              fontSize: 12,
              color: "#555",
              fontWeight: "500",
              marginTop: 10
            }}
          >
            {"Order Summary".toUpperCase()}
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
        </Content>
        <MyFooter navigation={navigation} selected={"bag"} />
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  backArrow: {
    color: "#9FA29F"
  },
  titleText: {
    color: "#9FA29F"
  }
});
export default PaymentOption;
