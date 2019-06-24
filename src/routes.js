import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Welcome from "~/pages/Welcome";
import Chat from "~/pages/Chat";

const Routes = userLogged =>
    createAppContainer(
        createSwitchNavigator(
            {
                Welcome,
                Chat
            },
            {
                initialRouteName: userLogged === true ? "Chat" : "Welcome"
            }
        )
    );

export default Routes;
