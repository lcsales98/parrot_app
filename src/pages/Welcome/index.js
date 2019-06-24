import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    ActivityIndicator // exibe loading
} from "react-native";

import styles from "./styles";
import PropTypes from "prop-types";
import "~/config/reactotronConfig";
import "~/config/devtoolsConfig";
import withAuthContext from "~/contexts/withAuthContext";

class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func
        }).isRequired
    };

    state = {
        name: "",
        loading: false,
        error: false
    };

    signIn = async () => {
        const { name } = this.state;
        const { navigation } = this.props;
        this.setState({ loading: true });

        try {
            console.tron.log(name);
            await this.props.changeUser(name);
            await this.saveUser(name);

            navigation.navigate("Chat"); // to chat
        } catch (err) {
            this.setState({ loading: false, error: true });
            console.tron.log("signIn err:", err);
        }
    };

    saveUser = async name => {
        try {
            await AsyncStorage.setItem("@User:name", name);
        } catch (err) {
            console.tron.log("saveUser err:", err);
        }
    };

    render() {
        const { name, loading } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bem vindo</Text>
                <Text style={styles.text}>
                    Para continuar precisamos que você informe o seu nome.
                </Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.form_input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Digite seu nome"
                        underlineColorAndroid="transparent"
                        value={name}
                        onChangeText={name => this.setState({ name: name })}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.signIn}
                    >
                        {loading ? (
                            <ActivityIndicator size="small" color="#FFF" />
                        ) : (
                            <Text style={styles.buttonText}>Prosseguir</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default withAuthContext(Welcome);
