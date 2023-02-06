import React, {Component} from 'react';
import {Outlet} from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        );
    };
}

export default App;