import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Entypo";

import styles from "./styles";
import withAuthContext from "~/contexts/withAuthContext";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigation: PropTypes.shape({
            navigate: PropTypes.func
        }).isRequired
    };

    signOut = async () => {
        const { navigation, signOut, socket } = this.props;
        console.tron.log(this.props);
        await AsyncStorage.clear();
        await signOut();
        socket.close();
        navigation.navigate("Welcome");
    };

    render() {
        const { title } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.left} />
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={this.signOut}>
                    <Icon name="log-out" size={23} style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    }
}

let final_comp = withAuthContext(Header);

export default withNavigation(final_comp);
