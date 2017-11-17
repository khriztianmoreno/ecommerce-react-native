import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import { List, ListItem, InputGroup, Input, Icon, Left, Body, Right } from "native-base";
import { observer, inject } from "mobx-react/native";
var deviceWidth = Dimensions.get("window").width;
@inject("view.app", "domain.user", "app", "routerActions")
@observer
class ListDropdown extends Component {
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
		const { routerActions } = this.props;
		// const id;
		var list = [
			{
				id: 1,
				value: "Topwear",
				sublist: ["T-Shirts", "Casual Shirts", "Formal Shirts"],
			},
			{
				id: 2,
				value: "Bottomwear",
				sublist: ["Jeans", "Casual Trousers", "Shorts", "Track Pants"],
			},
			{
				id: 3,
				value: "Sports & Active Wear",
				sublist: ["Active T-Shirts", "Track Pants", "Sport Pants"],
			},
			{
				id: 4,
				value: "Indian & Festive Wear",
				sublist: ["Active T-Shirts", "Track Pants", "Sport Pants"],
			},
			{
				id: 5,
				value: "Plus Size",
				sublist: ["Active T-Shirts", "Track Pants", "Sport Pants"],
			},
			{
				id: 6,
				value: "Footwear",
				sublist: ["Active T-Shirts", "Track Pants", "Sport Pants"],
			},
		];

		return (
			<List
				removeClippedSubviews={false}
				bounces={false}
				dataArray={list}
				renderRow={item =>
					<View>
						<ListItem
							onPress={() => this.categoryDropdown(item.id)}
							style={{ marginLeft: 0, paddingLeft: 10 }}
						>
							<Body>
								<Text style={styles.listHeading}>
									{item.value}
								</Text>
							</Body>
							<Right>
								<Icon
									style={styles.listIconHeading}
									name={item.id === this.state.categoryDrop ? "ios-arrow-up" : "ios-arrow-down"}
								/>
							</Right>
						</ListItem>
						{this.state.categoryDrop === item.id &&
							<List
								removeClippedSubviews={false}
								bounces={false}
								dataArray={item.sublist}
								renderRow={list =>
									<ListItem
										icon
										style={styles.listDropItems}
										onPress={() => this.props.navigation.navigate("ProductList")}
									>
										<Body>
											<Text style={styles.listDropText}>
												{list}
											</Text>
										</Body>
										<Right>
											<Icon style={styles.listIcon} name="ios-arrow-forward" />
										</Right>
									</ListItem>}
							/>}
					</View>}
			/>
		);
	}
}
const styles = {
	listHeading: {
		fontSize: 16,
		color: "#444",
		fontWeight: "600",
	},
	listDropText: {
		fontSize: 14,
		fontWeight: "300",
		paddingLeft: 10,
	},
	listDropItems: {
		marginLeft: 0,
	},
	listIconHeading: {
		fontWeight: "100",
		paddingTop: 2,
		fontSize: 18,
		color: "#444",
	},
	listIcon: {
		fontWeight: "100",
		paddingTop: 2,
		fontSize: 18,
		color: "#777",
	},
};
export default ListDropdown;
