import React from 'react';
import {
    Card,
    CardArea,
    Container,
    SliderArea,
    SubTitle, TeamContainer,
    TextAbout,
    Title
} from "./styles";
import SearchBar from "../../ui/SearchBar";
import StartedCard from "../../StartedCard";
import MembersBlock from "../../MembersBlock";
import {Button} from "../../ui/Button";
import DropDownList from "../../ui/DropList";
import SwiperBar from "../../ui/Slider";
import TeamPicture from "../../TeamPicture";


class Home extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <div className="flex-container">
                        <div>
                            <div>
                                <img src={require('../../img/Headline.svg').default} alt="Headline"
                                     className="icon-position"/>
                            </div>
                            <div className="wrapper">
                                <TextAbout>The scale of the challenges facing our planet can seem daunting, but we can
                                    all
                                    do
                                    something.
                                </TextAbout>
                            </div>
                            <SearchBar/>
                        </div>
                        <MembersBlock/>
                    </div>
                </Card>
                <TeamContainer>
                    <div>
                        <Title>Our Top Team</Title>
                        <SubTitle>Learn more about how you can save our planet's nature.</SubTitle>
                    </div>
                    <TeamPicture/>
                </TeamContainer>
                <CardArea>
                    <StartedCard/>
                </CardArea>
                <Container>
                    <div className="drop-list-area">
                        <Title>Ready to Get started?</Title>
                        <SubTitle>When pattern is mentioned in interior design, it is easy to asso- ciate it with a
                            geometric
                            patterned wallpaper or colourful prints on interior fabrics.</SubTitle>
                        <Button variant="primaryOrange" padding={'15px 36px'}>Contact us</Button>
                    </div>
                    <DropDownList/>
                </Container>
                <SliderArea>
                    <SwiperBar/>
                </SliderArea>
            </div>
        );
    }
}

export default Home;