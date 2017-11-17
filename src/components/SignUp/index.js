import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  InputGroup,
  Input,
  Footer,
  Text,
  FooterTab,
  Icon,
  Card,
  CardItem,
  Label,
  Form,
  Item,
  Segment
} from "native-base";
import { observer, inject } from "mobx-react/native";
import ThemeHeader from "../CommonComponents/Header/index.js";
import Style from "./style.js";
var deviceWidth = Dimensions.get("window").width;

@inject("view.app", "domain.user", "app", "routerActions")
@observer
class SignUp extends Component {
  render() {
    const userStore = this.props["domain.user"];
    const navigation = this.props.navigation;
    return (
      <Container>
        <ThemeHeader
          PageTitle="SIGN UP"
          IconLeft="arrow-back"
          route="loginHome"
          navigation={navigation}
        />
        <Content
          padder
          style={{ backgroundColor: "#fff", marginBottom: null }}
          bounces={false}
        >
          <Form>
            <Item underline style={{ marginLeft: 0 }}>
              <Input placeholder="Email address" />
            </Item>
            <Item underline style={{ marginLeft: 0 }}>
              <Input placeholder="Password" secureTextEntry />
            </Item>
            <Item underline style={{ marginLeft: 0 }}>
              <Input placeholder="Full Name" />
            </Item>
            <Item underline style={{ marginLeft: 0 }}>
              <Input placeholder="Mobile Number" />
            </Item>
            {/*<Segment>
                    <Button style={{borderColor:'#777', borderWidth:0.5}} first><Text>Female</Text></Button>
                    <Button style={{borderColor:'#777', borderWidth:0}} last><Text>Male</Text></Button>
                </Segment>*/}
            <Button
              primary
              block
              onPress={() => navigation.navigate("Profile")}
              style={{ marginTop: 30 }}
            >
              <Text> CREATE ACCOUNT </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default SignUp;
