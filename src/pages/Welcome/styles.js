import { StyleSheet } from "react-native";
import { Colors, Metrics } from "~/styles/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
        padding: Metrics.basePadding * 2,
        justifyContent: "center",
        alignItems: "stretch"
    },

    title: {
        textAlign: "center",
        color: Colors.black,
        fontSize: 24,
        fontWeight: "bold"
    },

    text: {
        textAlign: "center",
        marginTop: Metrics.baseMargin,
        fontSize: 12,
        color: Colors.darkTransparent,
        lineHeight: 21
    },

    error: {
        color: Colors.danger,
        textAlign: "center",
        marginTop: Metrics.baseMargin
    },

    form: {
        margin: Metrics.baseMargin * 2
    },

    input: {
        backgroundColor: Colors.white,
        borderRadius: Metrics.baseRadius,
        height: 44,
        paddingHorizontal: Metrics.basePadding
    },

    button: {
        backgroundColor: Colors.primary,
        borderRadius: Metrics.baseRadius,
        height: 44,
        marginTop: Metrics.baseMargin,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: Colors.white,
        fontWeight: "bold",
        fontSize: 16
    },

    link: {
        marginTop: Metrics.baseMargin * 2,
        backgroundColor: Colors.transparent,
        justifyContent: "center",
        alignItems: "center"
    },
    linkText: {
        color: Colors.primary
    },
    form_input: {
        backgroundColor: Colors.white,
        borderRadius: Metrics.baseRadius,
        height: 44,
        marginTop: Metrics.baseMargin * 2,
        paddingHorizontal: Metrics.basePadding
    }
});

export default styles;
