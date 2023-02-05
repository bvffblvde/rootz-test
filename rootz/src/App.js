import React, {Component} from 'react';
import {Outlet} from "react-router";
import Header from "./components/layout/Header";
import {HR} from "./styles";

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
            <HR/>
          <Outlet/>
        </div>
    );
  };
}

export default App;