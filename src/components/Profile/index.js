import React, { Component } from "react";
import {
  Container,
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
  Thumbnail,
  Grid,
  Col
} from "native-base";
import {
  Image,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { observer, inject } from "mobx-react/native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import IconOc from "react-native-vector-icons/Octicons";
import MyFooter from "../CommonComponents/Footer";

import commonColor from "../../theme/variables/commonColor.js";
@inject("view.app", "domain.user", "app", "routerActions")
@observer
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countCollections: 0,
      countShots: 0,
      countFollowing: 0,
      countFollowers: 0
    };
  }
  render() {
    var deviceWidth = Dimensions.get("window").width;
    return (
      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          showsVerticalScrollIndicator={false}
          backgroundColor="blue"
          contentBackgroundColor="#F6F6F7"
          parallaxHeaderHeight={200}
          renderBackground={() =>
            <Image
              source={require("../../images/ProfileCoverPic.png")}
              style={styles.profileCoverPic}
            />}
          renderForeground={() =>
            <Grid style={{ marginTop: 30, padding: 20 }}>
              <Col size={1}>
                <Thumbnail square source={require("../../images/1.jpg")} />
              </Col>
              <Col size={2}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.profileName}>Harshita</Text>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Text style={styles.bio}>Add Bio</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Button
                    transparent
                    style={{ paddingLeft: 0, marginLeft: 0, marginTop: -16 }}
                  >
                    <Text>
                      {" "}{this.state.countFollowing} Following
                    </Text>
                  </Button>
                  <View style={styles.seperator} />
                  <Button
                    transparent
                    style={{ paddingLeft: 0, marginLeft: 10, marginTop: -15 }}
                  >
                    <Text>
                      {" "}{this.state.countFollowers} Followers
                    </Text>
                  </Button>
                </View>
              </Col>
            </Grid>}
        >
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Button transparent style={styles.wcsButton}>
                <Text style={styles.wcsText}>Wishlist</Text>
              </Button>
              <View style={styles.seperator} />
              <Button transparent style={styles.wcsButton}>
                <Text style={styles.wcsText}>
                  {this.state.countCollections} Collections
                </Text>
              </Button>
              <View style={styles.seperator} />
              <Button transparent style={styles.wcsButton}>
                <Text style={styles.wcsText}>
                  {" "}{this.state.countShots} Shots
                </Text>
              </Button>
            </View>
            <View style={{ margin: 20 }}>
              <Button block bordered primary>
                <Icon name="ios-add" style={styles.addIcon} />
                <Text style={styles.postText}>POST</Text>
              </Button>
            </View>
          </View>
        </ParallaxScrollView>
        <MyFooter navigation={this.props.navigation} selected={"loginHome"} />
      </View>
    );
  }
}
const styles = {
  seperator: {
    alignItems: "center",
    height: 15,
    width: 1.5,
    backgroundColor: "#888"
  },
  profileCoverPic: {
    resizeMode: "cover",
    alignSelf: "center",
    height: 200
  },
  profileName: {
    flex: 1,
    fontSize: 20
  },
  bio: {
    fontStyle: "italic",
    fontSize: 12,
    color: "#7468C5"
  },
  view6: {
    height: 500,
    borderColor: "#F6F6F7",
    borderWidth: 1
  },
  view7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  wcsButton: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  },
  wcsText: {
    color: "#525664"
  },
  moreIcon: {
    color: commonColor.brandPrimary
  },
  addIcon: {
    color: commonColor.brandPrimary
  },
  view8: {
    alignSelf: "center",
    justifyContent: "center"
  },
  postText: {
    color: "#7468C5",
    alignSelf: "center",
    justifyContent: "center"
  }
};
export default Profile;
