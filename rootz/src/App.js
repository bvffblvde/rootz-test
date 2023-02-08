import React, {Component} from 'react';
import {Outlet} from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {

    authenticate(){
        return new Promise(resolve => setTimeout(resolve, 300))
    }

    componentDidMount(){
        this.authenticate().then(() => {
            const ele = document.getElementById('ipl-progress-indicator')
            if(ele){
                ele.classList.add('available')
                setTimeout(() => {
                    ele.outerHTML = ''
                }, 300)
            }
        })
    }
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