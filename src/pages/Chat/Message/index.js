import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Message = ({ isParrot, message, name }) => {
    return isParrot === false ? (
        <View style={styles.userMsgContainer}>
            <View style={styles.userMsg}>
                <Text style={styles.msg}>{name}:</Text>

                <Text style={styles.msg}>{message}</Text>
            </View>
        </View>
    ) : (
        <View style={styles.parrotMsgContainer}>
            <View style={styles.parrotMsg}>
                <Text style={styles.msg}>Parrot:</Text>

                <Text style={styles.msg}>{message}</Text>
            </View>
        </View>
    );
};

export default Message;
