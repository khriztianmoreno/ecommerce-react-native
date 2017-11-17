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
  ListItem
} from "native-base";
import {
  Image,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import { inject } from "mobx-react/native";
import Style from "./style.js";
import StyleHeader from "../CommonComponents/Header/style.js";
import ThemeHeader from "../CommonComponents/Header/index.js";
import NotifyContent from "../CommonComponents/NotifyContent";
import MyFooter from "../CommonComponents/Footer";

@inject("routerActions")
class Notifications extends Component {
  render() {
    var dataNotification = [
      {
        id: 1,
        tag: "Just Under $399",
        description: "Budget-Approved Styles | Only for 2 hours! Hurry!",
        time: "an hour ago"
      },
      {
        id: 2,
        tag: "Just Under $599",
        description: "Great Discount | Only for 10 hours! Hurry!",
        time: "5 hours ago"
      },
      {
        id: 3,
        tag: "Up to 70% OFF!",
        description:
          "Top Styles In T-shirts & Jeans | Roadster | UCB | HRX & More...",
        time: "9 hours ago",
        imageSaleThumb: require("../../images/1.jpg")
      },
      {
        id: 4,
        tag: "Win vh1 upersonic Passes",
        description:
          "Pick DC styles fot the concert | Tell us why DC is #Supersonic",
        time: "12 hours ago",
        imageSaleThumb: require("../../images/2.jpg")
      },
      {
        id: 5,
        tag: "Flaunt your stylist best",
        description: "Post a shot now | Feature on our OOTD page",
        time: "2 days ago",
        imageSaleThumb: require("../../images/3.jpg")
      }
    ];
    const { routerActions } = this.props;
    return (
      <Container>
        <ThemeHeader PageTitle="NOTIFICATIONS" IconRight="search" />
        <Content
          contentContainerStyle={{ paddingBottom: 10 }}
          padder
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 50 }}
        >
          <List
            removeClippedSubviews={false}
            bounces={false}
            dataArray={dataNotification}
            renderRow={item =>
              <NotifyContent
                tag={item.tag}
                description={item.description}
                time={item.time}
                imageSaleThumb={item.imageSaleThumb}
              />}
          />
        </Content>
        <MyFooter
          navigation={this.props.navigation}
          selected={"notifications"}
        />
      </Container>
    );
  }
}
export default Notifications;
