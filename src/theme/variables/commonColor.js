import color from "color";

import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;

module.exports = {
  platformStyle,
  platform,
  // AndroidRipple
  androidRipple: true,
  androidRippleColor: "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",

  // Badge
  badgeBg: "#ED1727",
  badgeColor: "#fff",
  // New Variable
  badgePadding: platform === "ios" ? 3 : 0,

  // Button
  btnFontFamily: platform === "ios" ? "System" : "Roboto_medium",
  btnDisabledBg: "#b5b5b5",
  btnDisabledClr: "#f1f1f1",

  // CheckBox
  CheckboxRadius: platform === "ios" ? 13 : 0,
  CheckboxBorderWidth: platform === "ios" ? 1 : 2,
  CheckboxPaddingLeft: platform === "ios" ? 4 : 2,
  CheckboxPaddingBottom: platform === "ios" ? 0 : 5,
  CheckboxIconSize: platform === "ios" ? 21 : 14,
  CheckboxIconMarginTop: platform === "ios" ? undefined : 1,
  CheckboxFontSize: platform === "ios" ? 23 / 0.9 : 18,
  DefaultFontSize: 17,
  checkboxBgColor: "#039BE5",
  checkboxSize: 20,
  checkboxTickColor: "#fff",

  // Segment
  segmentBackgroundColor: "#fff",
  segmentActiveBackgroundColor: "#7468C5",
  segmentTextColor: "#777",
  segmentActiveTextColor: "#fff",
  segmentBorderColor: "#777",
  segmentBorderColorMain: "#fff",

  // New Variable
  get defaultTextColor() {
    return this.textColor;
  },

  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: "#fff",

  // Color
  brandPrimary: "#7468C5",
  brandInfo: "#62B1F6",
  brandSuccess: "#00c497",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandSidebar: "#252932",

  themeDefault: "#7468C5",

  // Font
  fontFamily: platform === "ios" ? "System" : "Roboto",
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 50,
  footerDefaultBg: "#fff",

  // FooterTab
  tabBarTextColor: "#777",
  tabBarTextSize: platform === "ios" ? 10 : 10,
  activeTab: "#fff",
  sTabBarActiveTextColor: "#00c497",
  tabBarActiveTextColor: "#7468C5",
  tabActiveBgColor: "#fff",

  // Tab
  tabDefaultBg: "#2874F0",
  topTabBarTextColor: "#777",
  topTabBarActiveTextColor: "#777",
  topTabActiveBgColor: platform === "ios" ? "#1569f4" : undefined,
  topTabBarBorderColor: "#00c497",
  topTabBarActiveBorderColor: "#7468C5",

  // Header
  toolbarBtnColor: "#555",
  toolbarDefaultBg: "#fff",
  toolbarHeight: platform === "ios" ? 64 : 56,
  toolbarIconSize: platform === "ios" ? 20 : 22,
  toolbarSearchIconSize: platform === "ios" ? 20 : 23,
  toolbarInputColor: platform === "ios" ? "#CECDD2" : "#fff",
  searchBarHeight: platform === "ios" ? 30 : 40,
  toolbarInverseBg: "#222",
  toolbarTextColor: "#111",
  iosStatusbar: "dark-content",
  toolbarDefaultBorder: "#CCC",
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hex();
  },

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: platform === "ios" ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: platform === "ios" ? 33 : 24,

  // InputGroup
  inputFontSize: 14,
  inputBorderColor: "#D9D5DC",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "#ed2f2f",

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return "#777777";
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: platform === "ios" ? 37 : 30,
  lineHeight: platform === "ios" ? 20 : 24,

  // List
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listItemHeight: 45,
  listBtnUnderlayColor: "#DDD",

  // Card
  cardBorderColor: "#ccc",

  // Changed Variable
  listItemPadding: platform === "ios" ? 10 : 12,

  listNoteColor: "#808080",
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",

  // Radio Button
  radioBtnSize: platform === "ios" ? 25 : 23,
  radioSelectedColorAndroid: "#5067FF",

  // New Variable
  radioBtnLineHeight: platform === "ios" ? 29 : 24,

  radioColor: "#7e7e7e",

  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hex();
  },

  // Spinner
  defaultSpinnerColor: "#45D56E",
  inverseSpinnerColor: "#1A191B",

  // Tabs
  tabBgColor: "#F8F8F8",
  tabFontSize: 12,
  tabTextColor: "#222222",

  // Text
  textColor: "#000",
  inverseTextColor: "#fff",
  noteFontSize: 14,

  // Title
  titleFontfamily: platform === "ios" ? "System" : "Roboto_medium",
  titleFontSize: platform === "ios" ? 17 : 19,
  subTitleFontSize: platform === "ios" ? 12 : 14,
  subtitleColor: "#FFF",

  // New Variable
  titleFontColor: "#FFF",

  // Other
  borderRadiusBase: platform === "ios" ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hex();
  },

  dropdownBg: "#000",
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  jumbotronBg: "#C9C9CE",
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,

  // New Variable
  inputGroupRoundedBorderRadius: 30
};
