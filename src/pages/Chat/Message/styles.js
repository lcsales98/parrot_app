import { StyleSheet } from "react-native";
import { Colors, Metrics } from "~/styles";

const styles = StyleSheet.create({
    msg: {
        color: Colors.white
    },

    userMsgContainer: {
        display: "flex",
        margin: Metrics.baseMargin,
        flexDirection: "row-reverse"
    },

    parrotMsgContainer: {
        display: "flex",
        margin: Metrics.baseMargin,
        flexDirection: "row"
    },

    parrotMsg: {
        display: "flex",
        flexDirection: "column",
        padding: Metrics.basePadding / 2,
        backgroundColor: Colors.green,
        width: 300
    },
    userMsg: {
        display: "flex",
        flexDirection: "column",
        padding: Metrics.basePadding / 2,
        backgroundColor: Colors.black,
        width: 300
    },
    infoText: {
        color: Colors.black,
        fontSize: 16,
        marginLeft: Metrics.baseMargin,
        paddingTop: Metrics.basePadding / 3
    }
});

export default styles;
