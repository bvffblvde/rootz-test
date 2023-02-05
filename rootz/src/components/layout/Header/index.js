import React from "react";
import {Header, ToggleButtonWrapper} from "./styles";
import Logo from "../../img/Logo";
import ToggleMenu from "../../img/Toggle";

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
                    <Logo/>
                <ToggleButtonWrapper onClick={this.toggleMenu}>
                    <ToggleMenu/>
                </ToggleButtonWrapper>
                {this.state.toggleMenu && this.renderMenuContainer()}
            </Header>
        );
    }
}

export default HeaderComponent;