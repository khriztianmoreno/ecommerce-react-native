import React, { Component } from "react";
import { Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import {
  Container,
  Header,
  View,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  StyleProvider
} from "native-base";
import getTheme from "../../../theme/components/index";
import commonColor from "../../../theme/variables/commonColor";
import { inject } from "mobx-react/native";
import Style from "./style.js";

@inject("routerActions")
class ThemeHeader extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Header>
          <Left>
            {this.props.IconLeft &&
              <Button transparent>
                <Icon
                  onPress={() => navigation.goBack()}
                  style={{ padding: 5, marginLeft: -5 }}
                  name={this.props.IconLeft}
                />
              </Button>}
          </Left>
          <Body>
            <Title style={{ color: "#555", fontSize: 16, fontWeight: "400" }}>
              {this.props.PageTitle}
            </Title>
          </Body>
          <Right>
            {this.props.IconRight &&
              <Button transparent>
                <Icon
                  style={Style.icon}
                  name={this.props.IconRight}
                  transparent
                />
              </Button>}
          </Right>
        </Header>
      </StyleProvider>
    );
  }
}
export default ThemeHeader;
