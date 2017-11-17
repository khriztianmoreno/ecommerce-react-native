import React, { Component } from "react";
import { Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import {
  View,
  Text,
  Card,
  CardItem,
  Container,
  Content,
  Footer,
  FooterTab,
  StyleProvider,
  Button,
  Icon
} from "native-base";
import { inject } from "mobx-react/native";
import Style from "./style.js";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import Main from "../../ProductList/main";
@inject("routerActions", "view.app")
class ThemeFooter extends Component {
  render() {
    const tabs = this.props;
    const navigation = this.props.navigation;
    return (
      <Footer
        style={{
          marginHorizontal: -10,
          position: "absolute",
          bottom: 0
        }}
      >
        <FooterTab
          style={{
            width: Dimensions.get("window").width,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <Button
            active={tabs.selected === "home" ? true : false}
            style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
            onPress={() => navigation.navigate("HomePage")}
          >
            <IconSLI
              style={
                tabs.selected === "home"
                  ? Style.footerIconActive
                  : Style.footerIcon
              }
              name="home"
            />
            <Text
              style={
                tabs.selected === "home"
                  ? Style.footerIconTabText
                  : Style.footerIconText
              }
            >
              Home
            </Text>
          </Button>
          <Button
            active={tabs.selected === "categories" ? true : false}
            style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
            onPress={() => navigation.navigate("CATEGORIES")}
          >
            <IconSLI
              style={
                tabs.selected === "categories"
                  ? Style.footerIconActive
                  : Style.footerIcon
              }
              name="grid"
            />
            <Text
              style={
                tabs.selected === "categories"
                  ? Style.footerIconTabText
                  : Style.footerIconText
              }
            >
              Categories
            </Text>
          </Button>
          <Button
            active={tabs.selected === "loginHome" ? true : false}
            style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
            onPress={() => navigation.navigate("LOGINHOME")}
          >
            <IconFA
              style={
                tabs.selected === "loginHome"
                  ? Style.footerIconActive
                  : Style.footerIcon
              }
              name="user-o"
            />
            <Text
              style={
                tabs.selected === "loginHome"
                  ? Style.footerIconTabText
                  : Style.footerIconText
              }
            >
              Profile
            </Text>
          </Button>
          <Button
            active={tabs.selected === "notifications" ? true : false}
            style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
            onPress={() => navigation.navigate("NOTIFICATIONS")}
          >
            <IconFA
              style={
                tabs.selected === "notifications"
                  ? Style.footerIconActive
                  : Style.footerIcon
              }
              name="bell-o"
            />
            <Text
              style={
                tabs.selected === "notifications"
                  ? Style.footerIconTabText
                  : Style.footerIconText
              }
            >
              Notifications
            </Text>
          </Button>
          <Button
            active={tabs.selected === "bag" ? true : false}
            style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
            onPress={() => navigation.navigate("BAG")}
          >
            <IconSLI
              style={
                tabs.selected === "bag"
                  ? Style.footerIconActive
                  : Style.footerIcon
              }
              name="handbag"
            />
            <Text
              style={
                tabs.selected === "bag"
                  ? Style.footerIconTabText
                  : Style.footerIconText
              }
            >
              Bag
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
export default ThemeFooter;
