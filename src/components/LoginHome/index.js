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
  Body,
  Grid,
  Col
} from "native-base";
import {
  Image,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import { inject } from "mobx-react/native";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import Style from "./style.js";
import MyFooter from "../CommonComponents/Footer";

@inject("routerActions")
class Login extends Component {
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    return (
      <Container>
        <Content
          contentContainerStyle={{ paddingBottom: 15, alignItems: "center" }}
          scrollEnabled={false}
          style={{ backgroundColor: "#fff" }}
        >
          <Image
            source={require("../../images/shopping-cart.jpg")}
            style={Style.backgroundImage}
          />
          <Text style={Style.optionText}>
            {" "}Loved Our Collection? Login with
          </Text>
          <Button style={Style.fbutton}>
            <Icon name="logo-facebook" style={Style.ficon} />
            <Text style={Style.ftext}>FACEBOOK</Text>
          </Button>
          <Text style={Style.optionText}> - or use email address - </Text>
          <Grid>
            <Col style={Style.borderRight}>
              <Button
                transparent
                block
                onPress={() => navigation.navigate("Login")}
                style={Style.button}
              >
                <Text style={Style.buttonText}>LOGIN</Text>
              </Button>
              <View style={Style.seperator} />
            </Col>
            <Col style={Style.borderLeft}>
              <Button
                transparent
                block
                onPress={() => navigation.navigate("SignUp")}
                style={Style.button}
              >
                <Text style={Style.buttonText}>SIGNUP</Text>
              </Button>
            </Col>
          </Grid>
        </Content>
        <MyFooter navigation={this.props.navigation} selected={"loginHome"} />
      </Container>
    );
  }
}
export default Login;
