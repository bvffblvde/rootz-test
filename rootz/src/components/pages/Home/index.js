import React from 'react';
import Headline from "../../img/Headline";
import {Card, IconArea, TextAbout} from "./styles";
import SearchBar from "../../ui/SearchBar";
import StartedCard from "../../StartedCard";

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
                    <IconArea>
                        <div className="item-stack-top">
                            <img src={require('../../img/Сard.svg').default}
                                         alt="soft-serve-logo"/>
                        </div>
                        <div className="item-stack-bottom">
                            <img src={require('../../img/Parrot.png')} alt="Parrot"/>
                        </div>
                    </IconArea>
                </Card>
                <StartedCard/>
            </div>
        );
    }
}

export default Home;