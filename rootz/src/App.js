import React, {Component} from 'react';
import {Outlet} from "react-router";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Outlet/>
        </div>
    );
  };
}

export default App;