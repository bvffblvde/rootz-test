import React from 'react';
import Headline from "../../img/Headline";
import {Card, TextAbout} from "./styles";
import SearchBar from "../../ui/SearchBar";

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Headline className="svg-position"/>
                    <div className="wrapper">
                        <TextAbout>The scale of the challenges facing our planet can seem daunting, but we can all do
                            something.
                        </TextAbout>
                    </div>
                    <SearchBar/>
                </Card>
            </div>
        );
    }
}

export default Dashboard;