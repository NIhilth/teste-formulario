import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NewDemanda from "./Components/telaNovaDemanda";
import Home from "./Components/home"


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { NewDemanda }  path="/novaDemanda" />
       </BrowserRouter>
   )
}

export default Routes;