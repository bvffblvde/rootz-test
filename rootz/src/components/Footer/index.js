import React from 'react';
import {FooterContainer, SubTitle, Text, Title} from "./styles";
import TwitterIcon from "../img/TwitterIcon";
import FacebookIcon from "../img/FacebookIcon";
import LinkedInIcon from "../img/LinkedinIcon";

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <div className="media-container-one">
                    <Title>Contacts</Title>
                    <Text>2019 Rootz Foundation. All rights reserved</Text>
                </div>
                {/*<div className="media-container">*/}
                {/*    <div>*/}
                {/*        <SubTitle>Headquarters</SubTitle>*/}
                {/*        <Text>1234 Taliban</Text>*/}
                {/*        <Text>Los Angeles, La</Text>*/}
                {/*        <Text>1234567</Text>*/}
                {/*        <Text>(123) 456-7890</Text>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <SubTitle>Social media</SubTitle>*/}
                {/*        <div className="media-container">*/}
                {/*            <TwitterIcon/>*/}
                {/*            <FacebookIcon/>*/}
                {/*            <LinkedInIcon/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="media-container-two">
                    <SubTitle>Headquarters</SubTitle>
                    <Text>1234 Taliban</Text>
                    <Text>Los Angeles, La</Text>
                    <Text>1234567</Text>
                    <Text>(123) 456-7890</Text>
                </div>
                <div className="media-container-three">
                    <SubTitle>Social media</SubTitle>
                    <div className="media-container">
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <LinkedInIcon/>
                    </div>
                </div>
            </FooterContainer>
        );
    }
}

export default Footer;