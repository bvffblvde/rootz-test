import React from 'react';
import {TeamPictureArea} from "./styles";

class TeamPicture extends React.Component {
    render() {
        return (
            <TeamPictureArea>
                <div className="item-stack-top">
                    <img src={require('../img/IconTeamOne.png')} alt="Team1" className="item-stack-left"/>
                    <img src={require('../img/VectorOne.svg').default} className="item-stack-bottom-right"
                         alt="vector"/>
                </div>
                <div className="item-stack-bottom">
                    <img src={require('../img/IconTeamTwo.png')} alt="Team2" className="item-stack-right"/>
                    <img src={require('../img/VectorTwo.svg').default} className="item-stack-bottom-left"
                         alt="vector"/>
                </div>
                <div className="item-stack-bottom-last">
                    <img src={require('../img/IconTeamThree.png')} alt="Team3" className="item-stack-last"/>
                </div>
            </TeamPictureArea>
        );
    }
}

export default TeamPicture;