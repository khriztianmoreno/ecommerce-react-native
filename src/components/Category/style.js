import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import commonColor from "../../theme/variables/commonColor";
var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

export default {
  bannerHeading: {
    fontSize: 11,
    fontWeight: "300",
    color: "#696d79",
    marginLeft: 0,
    paddingLeft: 0
  },
  clearAll: {
    fontSize: 12,
    fontWeight: "400",
    color: commonColor.brandDanger
  },
  contactList: {
    alignItems: "center"
  },
  contactListItem: {
    color: commonColor.brandPrimary,
    fontSize: 18
  },
  noBorder: {
    borderBottomWidth: 0
  }
};
