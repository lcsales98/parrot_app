import React from "react";
import { Component } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import withAuthContext from "~/contexts/withAuthContext";
import styles from "./styles";

class UserTextInput extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        msg: ""
    };

    submit = () => {
        const { msg } = this.state;
        this.props.addMsg(msg, false);
        this.props.socket.emit("msg", msg);
        this.setState({ msg: "" });
    };

    changeMsg = async text => {
        await this.setState({ msg: text });
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    value={this.state.msg}
                    style={styles.textInputMessage}
                    placeholder="Digite sua mensagem"
                    placeholderTextColor="#fff"
                    onChangeText={this.changeMsg}
                />
                <TouchableOpacity style={styles.button} onPress={this.submit}>
                    <Icon
                        style={{
                            paddingTop: 20
                        }}
                        name="send"
                        size={15}
                        color={"#FFF"}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

let final_comp = withAuthContext(UserTextInput);

export default final_comp;
