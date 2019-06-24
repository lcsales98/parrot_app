import { StyleSheet } from "react-native";
import { Colors, Metrics } from "~/styles/index";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
        borderRadius: 5,
        backgroundColor: Colors.black,
        padding: 2
    },
    textInputMessage: {
        color: Colors.white,
        width: 290,
        marginLeft: 20,
        marginRight: 20
    },
    button: {
        flex: 1,
        paddingRight: 20,
        marginBottom: Metrics.baseMargin,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;
