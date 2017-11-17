import * as Expo from "expo";
import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { StyleProvider } from "native-base";
import App from "../../components/App";
import getTheme from "../../theme/components";
import variables from "../../theme/variables/commonColor";

export default function() {
  return function() {
    const app = this;
    const stores = app.get("state").getAllStores();
    const services = app.getAllServices();

    return class Root extends Component {
      constructor() {
        super();
        this.state = {
          isLoading: false,
          isReady: false
        };
      }
      async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          arial: require("../../../Fonts/Arial.ttf")
        });
        this.setState({ isReady: true });
      }

      render() {
        if (!this.state.isReady) {
          return <Expo.AppLoading />;
        }
        return (
          <StyleProvider style={getTheme(variables)}>
            <Provider {...stores} {...services} app={app}>
              <App />
            </Provider>
          </StyleProvider>
        );
      }
    };
  };
}
