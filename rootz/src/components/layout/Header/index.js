import React from "react";
import {Header} from "./styles";

type State = {
    toggleMenu: boolean;
};

class HeaderComponent extends React.Component {
    state: State = {
        toggleMenu: false
    };

    toggleMenu = () => {
        this.setState({toggleMenu: !this.state.toggleMenu});
    };

    renderMenuContainer = () => {
        return (
            <>
                <button onClick={this.toggleMenu}>Apply</button>
            </>
        );
    };

    render() {
        return (
            <Header>
                <button onClick={this.toggleMenu}>
                </button>
                {this.state.toggleMenu && this.renderMenuContainer()}
            </Header>
        );
    }
}

export default HeaderComponent;