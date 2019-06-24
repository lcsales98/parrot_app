import React, { Component } from "react";
import {
    View,
    AsyncStorage,
    KeyboardAvoidingView,
    ScrollView,
    Text
} from "react-native";
import Header from "~/components/Header";
import Message from "./Message";
import withAuthContext from "~/contexts/withAuthContext";
import MsgInput from "./InputMessage";
import styles from "./styles";

import io from "socket.io-client";

class Chat extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        socket: "",
        messages: [],
        parrotMsg: "",
        error: false
    };

    async componentDidMount() {
        console.tron.log(this.props.state);
        try {
            const socket = await io("ws://socketio-echo.herokuapp.com", {
                transports: ["websocket"],
                timeout: 3000
            });

            socket.on("connect", function(data) {
                console.tron.log("Socket.io connected...");
            });

            setTimeout(() => {
                if (!socket.connected) {
                    this.setState({ error: true });
                } else {
                    this.setState({ socket: socket });
                }
            }, 3500);

            let username;

            if (!this.props.state.name) {
                //console.tron.log("botando nome no estado do context");
                username = await AsyncStorage.getItem("@User:name");
                await this.props.changeUser(username);
                //console.tron.log(this.props.state);
            }

            socket.on("msg", msg => {
                //console.tron.log("msg", msg);
                this.props.addMsg(msg);
            });

            await this.setState({ messages: this.props.state.messages });
        } catch (error) {
            console.tron.log(error);
        }
    }

    componentDidUpdate() {
        this.scrollView.scrollToEnd({ animated: true });
    }

    render() {
        return (
            <View>
                <Header socket={this.state.socket} title="Parrot Chat" />
                {this.state.error === true && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>
                            Erro na conexão com servidor!
                        </Text>
                    </View>
                )}
                <KeyboardAvoidingView
                    style={styles.chat}
                    behavior="padding"
                    enabled
                >
                    <ScrollView
                        style={{ flex: 0.8 }}
                        ref={scrollView => {
                            this.scrollView = scrollView;
                        }}
                    >
                        {this.props.state.messages.map((element, index) => (
                            <Message
                                key={index}
                                isParrot={element.isParrot}
                                message={element.msg}
                                name={this.props.state.name}
                            />
                        ))}
                        <View style={{ height: 80 }} />
                    </ScrollView>
                    {this.state.error === false && (
                        <MsgInput socket={this.state.socket} />
                    )}
                </KeyboardAvoidingView>
            </View>
        );
    }
}

let final_comp = withAuthContext(Chat);

export default final_comp;
