import React from "react";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";

import Main from "./Main";
import SaveAddress from "./SaveAddress";
import ConfirmAddress from "./ConfirmAddress";
import PaymentOptions from "./PaymentOptions";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Shop from "./Shop";
import Product from "./Product";

const App = StackNavigator(
  {
    Main: { screen: Main },
    SaveAddress: { screen: SaveAddress },
    ConfirmAddress: { screen: ConfirmAddress },
    PaymentOptions: { screen: PaymentOptions },
    ProductList: { screen: ProductList },
    ProductPage: { screen: ProductPage },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Profile: { screen: Profile },
    Shop: { screen: Shop },
    Product: { screen: Product }
  },
  {
    index: 0,
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
