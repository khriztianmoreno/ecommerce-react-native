import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import commonColor from "../../../theme/variables/commonColor";
var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

export default {
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
