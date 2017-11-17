import React, { Component } from "react";
import {
  View,
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
  Item,
  Text,
  H3
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
import MyFooter from "../CommonComponents/Footer";

@inject("view.app", "domain.user", "app", "routerActions")
@observer
class SaveAddress extends Component {
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    return (
      <Container>
        <ThemeHeader
          PageTitle="ADDRESS"
          IconLeft="arrow-back"
          route="bag"
          navigation={navigation}
        />
        <Content
          style={{ marginBottom: 50 }}
          padder
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <Text style={{ fontSize: 12, color: "#555", fontWeight: "500" }}>
            ADD NEW ADDRESS{" "}
          </Text>
          <Card style={{ paddingHorizontal: 10 }}>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Pin Code" />
            </Item>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Locality" />
            </Item>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="City" />
            </Item>
            <Item underline style={{ borderBottomWidth: 0 }}>
              <Input style={{ paddingLeft: 0 }} placeholder="State" />
            </Item>
          </Card>
          <Card style={{ paddingHorizontal: 10 }}>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Name" />
            </Item>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Address" />
            </Item>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Mobile No." />
            </Item>
          </Card>
          <Button
            primary
            block
            onPress={() => navigation.navigate("ConfirmAddress")}
            style={{ marginTop: 10, marginBottom: 15 }}
          >
            <Text> SAVE </Text>
          </Button>
        </Content>
        <MyFooter navigation={navigation} selected={"bag"} />
      </Container>
    );
  }
}
export default SaveAddress;
