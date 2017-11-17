import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import { Text, Card, CardItem } from "native-base";
import { inject } from "mobx-react/native";
var deviceWidth = Dimensions.get("window").width;

@inject("routerActions")
class SaleThumb extends Component {
	render() {
		// var imageSource = require("../../../assets/images/saleThumb1.png");
		var thumbWidth = deviceWidth / 3 - 10;
		const navigation = this.props.navigation;
		return (
			<View style={{ height: 160, width: deviceWidth / 3 - 10 }}>
				<Card style={{ width: thumbWidth, borderWidth: 0, borderColor: "transparent", shadowOpacity: 0 }}>
					<CardItem
						button
						onPress={() => navigation.navigate("ProductList")}
						style={{
							alignSelf: "center",
							flex: 1,
							flexDirection: "column",
							width: thumbWidth,
							borderWidth: 0.5,
							borderColor: "#F3F3F3",
							shadowOpacity: 0,
							paddingTop: 0,
						}}
					>
						<Image style={{ width: thumbWidth, height: 115 }} source={this.props.imageSource} />
						<Text
							style={{
								textAlign: "center",
								fontSize: 14,
								fontWeight: "500",
								marginTop: 5,
								marginBottom: 5,
								width: thumbWidth,
							}}
						>
							{this.props.saleData}
						</Text>
					</CardItem>
				</Card>
			</View>
		);
	}
}
export default SaleThumb;
