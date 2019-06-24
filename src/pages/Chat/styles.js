import { StyleSheet } from "react-native";
import { Colors, Metrics } from "~/styles/index";

const styles = StyleSheet.create({
    errorContainer: {
        position: "relative",
        backgroundColor: Colors.danger,
        padding: 10,
        margin: Metrics.baseMargin * 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3
    },
    errorText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: "bold"
    },
    chat: {
        minHeight: 580,
        flexDirection: "column",
        marginHorizontal: Metrics.baseMargin * 2
    }
});

export default styles;
