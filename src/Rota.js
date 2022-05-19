import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NewDemanda from "./Components/telaNovaDemanda";
import Home from "./Components/home"


const Rota = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={Home} path="/" />
                <Route element={NewDemanda} path="/novaDemanda" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rota;