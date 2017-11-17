import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Text
} from "react-native";
import {
  Card,
  CardItem,
  Button,
  Icon,
  Thumbnail,
  Grid,
  Col,
  Style
} from "native-base";
import { observer, inject } from "mobx-react/native";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
import commonColor from "../../../theme/variables/commonColor";
import IconMI from "react-native-vector-icons/MaterialIcons";

@inject("view.app", "domain.user", "app", "routerActions")
class BagItems extends Component {
  render() {
    const { routerActions } = this.props;
    // var imageSource = require("../../../assets/images/saleThumb1.png");
    var thumbWidth = deviceWidth / 2;
    var thumbHeight = deviceHeight / 2 - 5;
    return (
      <Card>
        <CardItem>
          <Grid>
            <Col size={1}>
              <Thumbnail
                style={{ resizeMode: "contain", marginTop: 5 }}
                square
                source={this.props.imageSource}
              />
            </Col>
            <Col size={4}>
              <Text
                style={styles.itemDesc}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {this.props.product}
              </Text>
              <Text style={styles.soldBy}>
                Sold by: {this.props.soldby}
              </Text>
              <Text style={styles.inStock}>
                Only {this.props.id} units in stock
              </Text>
              <View>
                <Text style={styles.price}>
                  {" "}{this.props.price}
                </Text>
                <Text style={styles.discountedText}>$ 799</Text>
              </View>
            </Col>
          </Grid>
        </CardItem>
        <CardItem
          style={{
            justifyContent: "space-around",
            borderTopWidth: 0.5,
            borderTopColor: "#ccc",
            margin: 10,
            marginBottom: 0,
            padding: 0,
            borderBottomWidth: 0
          }}
        >
          <TouchableOpacity style={styles.bagItemButtons}>
            <Text style={styles.bagItemButtonText}>REMOVE</Text>
          </TouchableOpacity>
          <View style={styles.btnDivider} />
          <TouchableOpacity style={styles.bagItemButtons}>
            <Text style={styles.bagItemButtonText}>MOVE TO WISHLIST</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  itemDesc: {
    fontSize: 14,
    fontWeight: "300",
    color: "#333"
  },
  soldBy: {
    fontSize: 13,
    fontWeight: "300",
    color: "#888"
  },
  inStock: {
    fontSize: 12,
    fontWeight: "300",
    color: "#f9db2f"
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
    textDecorationLine: "line-through"
  },
  discountedText: {
    fontSize: 14,
    fontWeight: "300",
    color: commonColor.brandPrimary,
    marginLeft: 2
  },
  bagItemButtons: {
    justifyContent: "center",
    flex: 1
  },
  bagItemButtonText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    color: "#777"
  },
  btnDivider: {
    height: 30,
    width: 0.5,
    backgroundColor: "#ccc",
    marginTop: 12,
    marginBottom: 12
  }
});
export default BagItems;
