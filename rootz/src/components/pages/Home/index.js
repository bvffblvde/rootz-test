import React from 'react';
import Headline from "../../img/Headline";
import {Card, Container, DropDownArea, SubTitle, TextAbout, Title} from "./styles";
import SearchBar from "../../ui/SearchBar";
import StartedCard from "../../StartedCard";
import MembersBlock from "../../MembersBlock";
import {Button} from "../../ui/Button";

class Home extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <div>
                        <Headline className="icon-position"/>
                    </div>
                    <div className="wrapper">
                        <TextAbout>The scale of the challenges facing our planet can seem daunting, but we can all do
                            something.
                        </TextAbout>
                    </div>
                    <SearchBar/>
                    <MembersBlock/>
                </Card>
                <Container>
                    <Title>Our Top Team</Title>
                    <SubTitle>Learn more about how you can save our planet's nature.</SubTitle>
                </Container>
                <StartedCard/>
                <Container>
                    <Title>Ready to Get started?</Title>
                    <SubTitle>When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric
                        patterned wallpaper or colourful prints on interior fabrics.</SubTitle>
                    <Button variant="primaryOrange" padding={'15px 36px'}>Contact us</Button>
                </Container>
            </div>
        );
    }
}

export default Home;