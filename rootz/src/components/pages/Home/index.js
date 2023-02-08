import React from 'react';
import Headline from "../../img/Headline";
import {Card, Container, SliderArea, SubTitle, TeamPictureArea, TextAbout, Title} from "./styles";
import SearchBar from "../../ui/SearchBar";
import StartedCard from "../../StartedCard";
import MembersBlock from "../../MembersBlock";
import {Button} from "../../ui/Button";
import DropDownList from "../../ui/DropList";
import SwiperBar from "../../ui/Slider";


class Home extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <div className="flex-container">
                        <div>
                            <div>
                                <Headline className="icon-position"/>
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
                <Container>
                    <Title>Our Top Team</Title>
                    <SubTitle>Learn more about how you can save our planet's nature.</SubTitle>
                    <TeamPictureArea>
                        <div className="item-stack-top">
                            <img src={require('../../img/IconTeamOne.png')} alt="Team1" className="item-stack-left"/>
                            <img src={require('../../img/VectorOne.svg').default} className="item-stack-bottom-right"
                                 alt="vector"/>
                        </div>
                        <div className="item-stack-bottom">
                            <img src={require('../../img/IconTeamTwo.png')} alt="Team2" className="item-stack-right"/>
                            <img src={require('../../img/VectorTwo.svg').default} className="item-stack-bottom-left"
                                 alt="vector"/>
                        </div>
                        <div className="item-stack-bottom-last">
                            <img src={require('../../img/IconTeamThree.png')} alt="Team3" className="item-stack-left"/>
                        </div>
                    </TeamPictureArea>
                </Container>
                <StartedCard/>
                <Container>
                    <Title>Ready to Get started?</Title>
                    <SubTitle>When pattern is mentioned in interior design, it is easy to asso- ciate it with a
                        geometric
                        patterned wallpaper or colourful prints on interior fabrics.</SubTitle>
                    <Button variant="primaryOrange" padding={'15px 36px'}>Contact us</Button>
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