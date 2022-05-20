import NavBar from "./navBar";
import SignupForm from "./forms";
import Directory from "./directory";
import ProgressBar from "./progressBar";
import "./../style.css"
import { useState } from "react";
import { Link } from 'react-router-dom';

const campos = [{nome:"Título", tipo: "input", key:1}, {nome:"Problema atual", tipo:"textarea", key:2}, {nome:"Objetivo", tipo:"textarea", key:3}]

const NewDemanda = () => {
  const [value, setValue] = useState(1)
  return (
    <div>
      <NavBar />
      <div>
        <Directory now={"Nova Demanda"} pass={"home/"}/>
        <div className="content">
          <ProgressBar now={value} />
          <SignupForm value={value} nextPage={setValue} inputs={campos}></SignupForm>
        </div>
      </div>
      <Link to="/">retornar a página inicial</Link>
    </div>
  );
}

export default NewDemanda;
