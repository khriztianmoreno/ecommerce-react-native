import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import commonColor from "../../theme/variables/commonColor";
var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

export default {
  bagTopContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: -5,
    marginHorizontal: 5
  },
  textMuted: {
    fontSize: 13,
    color: "#555",
    fontWeight: "500"
  },
  textMutedLight: {
    fontSize: 13,
    color: "#555",
    fontWeight: "300"
  },
  discountedText: {
    fontSize: 13,
    fontWeight: "300",
    color: commonColor.brandPrimary,
    marginLeft: 2
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555"
  }
};
