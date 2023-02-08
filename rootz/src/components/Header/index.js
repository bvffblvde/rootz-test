import React from "react";
import {Header, ToggleButtonWrapper, Wrapper} from "./styles";
import Logo from "../img/Logo";
import ToggleMenuComponent from "../ToggleMenu";
import {HR} from "../styled/HR";
import {Button} from "../ui/Button";
import {TextButton} from "../ToggleMenu/styles";

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
                    <TextButton as="a" href="/home" className="display-mobile-none">Home</TextButton>
                    <TextButton className="display-mobile-none">Our mission</TextButton>
                    <TextButton className="display-mobile-none">Places</TextButton>
                    <TextButton className="display-mobile-none">Team</TextButton>
                    <Button variant="primary" padding={'13px 48px'} className="display-mobile-none">Apply</Button>
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
