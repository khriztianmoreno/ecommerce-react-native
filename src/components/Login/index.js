import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
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
  Text,
  Icon,
  Card,
  CardItem,
  Label,
  Form,
  Item
} from "native-base";
import { observer, inject } from "mobx-react/native";
import ThemeHeader from "../CommonComponents/Header/index.js";
import IconFA from "react-native-vector-icons/FontAwesome";
import Style from "./style.js";

@inject("view.app", "domain.user", "app", "routerActions")
@observer
class Login extends Component {
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    return (
      <Container>
        <ThemeHeader
          PageTitle="LOGIN"
          IconLeft="arrow-back"
          route="loginHome"
          navigation={navigation}
        />
        <Content
          padder
          style={{ backgroundColor: "#fff", marginBottom: null }}
          bounces={false}
        >
          <Form>
            <Item underline style={{ marginLeft: 0 }}>
              <Input placeholder="Email address" />
            </Item>
            <Item underline style={{ marginLeft: 0 }}>
              <Input placeholder="Password" secureTextEntry />
            </Item>
            <Button
              primary
              block
              onPress={() => navigation.navigate("Profile")}
              style={{ marginTop: 30 }}
            >
              <Text> LOGIN </Text>
            </Button>
            <Button block transparent>
              <Text style={{ fontWeight: "700", fontSize: 12 }}>
                FORGOT PASSWORD?
              </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default Login;
