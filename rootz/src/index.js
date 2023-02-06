import {render} from "react-dom";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="home" element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);
