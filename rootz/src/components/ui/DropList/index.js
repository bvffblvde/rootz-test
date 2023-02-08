import React from "react";
import {CircleButton, Description, DescriptionTitle, GrayLine, MoreInfoContainer, TitleArea} from "./styles";

type Props = {
    title?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
};

type State = {
    isMenuOpen: boolean,
}

const title = [
    {id: 1, label: 'What can I do to protect our planet?'},
    {id: 2, label: 'How to save nature ecology?'},
    {id: 3, label: 'What is nature conservation?'},
];

const descriptionText = [
    {
        id: 1,
        descriptions: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
    },
    {
        id: 2,
        descriptions: 'To reduce the use of non-renewable resources; to switch to alternative energy sources; to reduce the use of non-renewable resources; to reduce the use of non-renewable resources'
    },
    {
        id: 3,
        descriptions: 'To reduce the use of non-renewable resources; to switch to alternative energy sources; to reduce the use of non-renewable resources; to reduce the use of non-renewable resources'
    },
];


class DropDownList extends React.Component<Props, State> {

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

    setState = (state) => {
        super.setState(state);

        if (state.isMenuOpen) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }

    renderToggleMenu = () => {
        return (
            <div>
                {title.map((item) => {
                    return (
                        <div>
                            <TitleArea>
                                <div key={item.id}>
                                    <DescriptionTitle>{item.label}</DescriptionTitle>
                                </div>
                                <CircleButton type="button"
                                              onClick={() => this.setState({isMenuOpen: !this.state.isMenuOpen})}>
                                    {this.state.isMenuOpen ? '—' : '+'}
                                </CircleButton>
                            </TitleArea>
                            {this.state.isMenuOpen ? <div key={item.id}>
                                <Description>{descriptionText[item.id - 1].descriptions}</Description>
                            </div> : null}
                            <GrayLine/>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <MoreInfoContainer>
                {this.renderToggleMenu()}
            </MoreInfoContainer>
        );
    }
}

export default DropDownList;