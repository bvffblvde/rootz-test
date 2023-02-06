import React from 'react';
import {Container, FormField, StartedCardContainer, SubTitle, Title, TitleForm} from "./styles";
import {Button} from "../ui/Button";


class StartedCard extends React.Component {
    render() {
        return (
            <StartedCardContainer>
                <Title>Get Started Today!</Title>
                <SubTitle>Learn more about how you can save our planet's nature. From smart consumption to switching to
                    renewable energy, each of us can do our part to save the planet. </SubTitle>
                <Container>
                    <TitleForm>Log in</TitleForm>
                    <div className="form-field-area">
                        <FormField placeholder="Name"/>
                        <FormField placeholder="Email"/>
                    </div>
                    <Button variant="primaryOrange" fullWidth margin={'16px 0 0'}>BOOK A DEMO</Button>
                </Container>
            </StartedCardContainer>

        );
    }
}

export default StartedCard;