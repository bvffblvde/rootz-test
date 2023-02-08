import React from "react";
import {
    ButtonArea,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader, TextButton,
} from "./styles";
import ToggleMenu from "../img/Toggle";
import {HR} from "../styled/HR";
import Logo from "../img/Logo";
import {Header, ToggleButtonWrapper} from "../Header/styles";
import Cross from "../img/Cross";
import {Button} from "../ui/Button";


type Props = {
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
};

type State = {
    isMenuOpen: boolean,
}

class ToggleMenuModal extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
        };
    }

    openMenu = () => {
        this.setState({isMenuOpen: true});
    }

    closeMenu = () => {
        this.setState({isMenuOpen: false});
    }

    renderToggleMenuButton = () => {
        return (
            <ToggleButtonWrapper type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={this.openMenu}
            >
                <ToggleMenu/>
            </ToggleButtonWrapper>
        );
    }

    renderToggleMenu = () => {
        return (
            <Modal>
                <ModalContent>
                    <ModalHeader>
                        <Header>
                            <Logo/>
                            <ToggleButtonWrapper onClick={this.closeMenu}>
                                <Cross/>
                            </ToggleButtonWrapper>
                        </Header>
                        <HR/>
                    </ModalHeader>
                    <ModalBody>
                        <ButtonArea>
                            <TextButton as="a" href="/home">Home</TextButton>
                            <TextButton>Our mission</TextButton>
                            <TextButton>Places</TextButton>
                            <TextButton>Team</TextButton>
                        </ButtonArea>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="primary" fullWidth onClick={this.closeMenu}>Apply</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    }

    render() {
        const {isMenuOpen} = this.state;
        return (
            <div>
                {this.renderToggleMenuButton()}
                {isMenuOpen ? this.renderToggleMenu() : null}
            </div>
        );
    }
}

export default ToggleMenuModal;