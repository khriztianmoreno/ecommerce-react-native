import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import { List, ListItem, InputGroup, Input, Icon } from "native-base";
import { observer, inject } from "mobx-react/native";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
@inject("view.app", "domain.user", "app", "routerActions")
@observer
class RoundImageButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryDrop: null,
		};
	}
	categoryDropdown(id) {
		if (this.state.categoryDrop === id) {
			this.setState({ categoryDrop: null });
			return;
		}
		this.setState({ categoryDrop: id });
	}
	render() {
		const userStore = this.props["domain.user"];
		const navigation = this.props.navigation;
		return (
			<TouchableOpacity
				activeOpacity={1}
				style={styles.roundButtonsWrap}
				onPress={() => navigation.navigate("Shop")}
			>
				<Image style={styles.roundButtons} source={this.props.roundImageSource} />
				<Text style={styles.text}>
					{this.props.roundImageText}
				</Text>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	roundButtonsWrap: {
		alignItems: "center",
		height: deviceHeight / 6,
		width: deviceWidth / 4 - 4,
		justifyContent: "center",
	},
	roundButtons: {
		height: (deviceWidth - 60) / 4,
		width: (deviceWidth - 60) / 4,
		borderRadius: (deviceWidth - 60) / 4 / 2,
		alignItems: "center",
		justifyContent: "center",
		margin: 4,
		resizeMode: "cover",
	},
	text: {
		alignSelf: "center",
		fontSize: 11,
		fontWeight: "500",
	},
});
export default RoundImageButton;
