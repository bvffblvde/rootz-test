import {render} from "react-dom";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./components/pages/Dashboard";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);
