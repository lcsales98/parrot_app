import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import "~/config/reactotronConfig";
import "~/config/devtoolsConfig";

import createNavigator from "~/routes";
import { AuthProvider } from "~/contexts/auth.context";

export default class App extends Component {
    state = {
        userChecked: false,
        userLogged: false
    };

    async componentDidMount() {
        const username = await AsyncStorage.getItem("@User:name");
        this.setState({ userChecked: true, userLogged: !!username });
    }

    render() {
        const { userChecked, userLogged } = this.state;

        if (!userChecked) return null;

        const Routes = createNavigator(userLogged);

        return (
            <AuthProvider>
                <Routes />
            </AuthProvider>
        );
    }
}
