import * as React from "react";
import { AuthContext } from "./auth.context";

export default function withContext(Component) {
    return function withContextComponent(props) {
        return (
            <AuthContext.Consumer>
                {contexts => <Component {...props} {...contexts} />}
            </AuthContext.Consumer>
        );
    };
}
