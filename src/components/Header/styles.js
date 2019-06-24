import { StyleSheet } from "react-native";
import { Colors, Metrics } from "~/styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height: 54 + getStatusBarHeight(),
        paddingTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.light,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: Metrics.basePadding
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.darker
    },

    icon: {
        color: Colors.darker
    }
});

export default styles;
