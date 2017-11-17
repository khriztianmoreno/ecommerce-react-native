import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import {
  Card,
  CardItem,
  Button,
  Icon,
  Grid,
  Col,
  Thumbnail,
  Row
} from "native-base";
import { observer, inject } from "mobx-react/native";
import IconFA from "react-native-vector-icons/FontAwesome";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
import commonColor from "../../../theme/variables/commonColor";
import IconMI from "react-native-vector-icons/MaterialIcons";

@inject("view.app", "domain.user", "app", "routerActions")
class NotifyContent extends Component {
  render() {
    // var imageSource = require("../../../assets/images/saleThumb1.png");
    var thumbWidth = deviceWidth / 2;
    var thumbHeight = deviceHeight / 2 - 5;
    return (
      <Card>
        <CardItem>
          <Grid>
            <Row>
              <Col size={1}>
                <View style={{ marginTop: 5, marginLeft: 0 }}>
                  <IconFA name="bell-o" style={styles.bellIcon} />
                </View>
              </Col>
              <Col size={5}>
                <View>
                  <Text style={styles.tag}>
                    {this.props.tag}
                  </Text>
                  <Text
                    style={styles.desc}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {this.props.description}
                  </Text>
                  <Text
                    style={styles.time}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {this.props.time}
                  </Text>
                </View>
              </Col>
            </Row>
            <Row>
              <Col>
                {this.props.imageSaleThumb &&
                  <Image
                    style={styles.notifyImage}
                    source={this.props.imageSaleThumb}
                  />}
              </Col>
            </Row>
          </Grid>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  bellIcon: {
    fontSize: 28,
    color: commonColor.brandPrimary
  },
  tag: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
    marginRight: 10
  },
  desc: {
    fontSize: 14,
    fontWeight: "400",
    color: "#333",
    lineHeight: 16,
    marginRight: 10
  },
  time: {
    fontSize: 13,
    fontWeight: "300",
    color: "#888",
    marginBottom: 4,
    marginRight: 10
  },
  notifyImage: {
    width: null,
    height: deviceWidth / 2,
    margin: 6,
    resizeMode: "contain",
    borderColor: "#ccc",
    justifyContent: "center"
  }
});
export default NotifyContent;
