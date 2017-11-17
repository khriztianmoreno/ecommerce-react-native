import React, { Component } from "react";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import { Icon, FooterTab, Button, Footer, Text } from "native-base";

import { TabNavigator } from "react-navigation";
import commonColor from "../theme/variables/commonColor";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";

import HomePage from "./HomePage";
import BAG from "./Bag";
import LOGINHOME from "./LoginHome";
import CATEGORIES from "./Category";
import NOTIFICATIONS from "./Notifications";

const Main = TabNavigator(
  {
    HomePage: { screen: HomePage },
    CATEGORIES: { screen: CATEGORIES },
    LOGINHOME: { screen: LOGINHOME },
    NOTIFICATIONS: { screen: NOTIFICATIONS },
    BAG: { screen: BAG }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
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
              active={props.navigation.state.index === 0 ? true : false}
              style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
              onPress={() => props.navigation.navigate("HomePage")}
            >
              <IconSLI
                style={
                  props.navigation.state.index === 0
                    ? Style.footerIconActive
                    : Style.footerIcon
                }
                name="home"
              />
              <Text
                style={
                  props.navigation.state.index === 0
                    ? Style.footerIconTabText
                    : Style.footerIconText
                }
              >
                Home
              </Text>
            </Button>
            <Button
              active={props.navigation.state.index === 1 ? true : false}
              style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
              onPress={() => props.navigation.navigate("CATEGORIES")}
            >
              <IconSLI
                style={
                  props.navigation.state.index === 1
                    ? Style.footerIconActive
                    : Style.footerIcon
                }
                name="grid"
              />
              <Text
                style={
                  props.navigation.state.index === 1
                    ? Style.footerIconTabText
                    : Style.footerIconText
                }
              >
                Categories
              </Text>
            </Button>
            <Button
              active={props.navigation.state.index === 2 ? true : false}
              style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
              onPress={() => props.navigation.navigate("LOGINHOME")}
            >
              <IconFA
                style={
                  props.navigation.state.index === 2
                    ? Style.footerIconActive
                    : Style.footerIcon
                }
                name="user-o"
              />
              <Text
                style={
                  props.navigation.state.index === 2
                    ? Style.footerIconTabText
                    : Style.footerIconText
                }
              >
                Profile
              </Text>
            </Button>
            <Button
              active={props.navigation.state.index === 3 ? true : false}
              style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
              onPress={() => props.navigation.navigate("NOTIFICATIONS")}
            >
              <IconFA
                style={
                  props.navigation.state.index === 3
                    ? Style.footerIconActive
                    : Style.footerIcon
                }
                name="bell-o"
              />
              <Text
                style={
                  props.navigation.state.index === 3
                    ? Style.footerIconTabText
                    : Style.footerIconText
                }
              >
                Notifications
              </Text>
            </Button>
            <Button
              active={props.navigation.state.index === 4 ? true : false}
              style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
              onPress={() => props.navigation.navigate("BAG")}
            >
              <IconSLI
                style={
                  props.navigation.state.index === 4
                    ? Style.footerIconActive
                    : Style.footerIcon
                }
                name="handbag"
              />
              <Text
                style={
                  props.navigation.state.index === 4
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
);

const Style = {
  footerIcon: {
    fontSize: 17,
    color: "#777",
    lineHeight: 20,
    fontWeight: "500"
  },
  footerIconActive: {
    fontSize: 17,
    color: commonColor.brandPrimary,
    lineHeight: 20,
    fontWeight: "500"
  },
  footerIconTabText: {
    fontSize: 11,
    color: commonColor.brandPrimary,
    lineHeight: 15,
    fontWeight: "100",
    textAlign: "center"
  },
  footerIconText: {
    fontSize: 11,
    color: "#777",
    lineHeight: 15,
    fontWeight: "100",
    textAlign: "center"
  }
};

export default Main;
