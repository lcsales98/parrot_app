import React from "react";

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: "",
        messages: []
    };

    signOut = async () => {
        await this.setState({ name: "", messages: [] });
    };

    changeUser = async name => {
        await this.setState({ name: name });
    };

    addMsg = async (msg, isParrot) => {
        await this.setState({
            messages: [...this.state.messages, { msg: msg, isParrot: isParrot }]
        });

        console.tron.log(this.state);
    };

    render() {
        return (
            <AuthContext.Provider
                value={{
                    state: this.state,
                    changeUser: this.changeUser,
                    addMsg: this.addMsg,
                    signOut: this.signOut
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
