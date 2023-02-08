import React from "react";
import {Header, ToggleButtonWrapper, Wrapper} from "./styles";
import Logo from "../img/Logo";
import ToggleMenuComponent from "../ToggleMenu";
import {HR} from "../styled/HR";

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

    render() {
        return (
            <Wrapper>
                <Header>
                    <Logo/>
                    <ToggleButtonWrapper onClick={this.toggleMenu}>
                        <ToggleMenuComponent/>
                    </ToggleButtonWrapper>
                    {this.state.toggleMenu}
                </Header>
                <HR/>
            </Wrapper>
        );
    }
}

export default HeaderComponent;
