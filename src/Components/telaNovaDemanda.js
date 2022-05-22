import NavBar from "./navBar";
import SignupForm from "./forms";
import Directory from "./directory";
import ProgressBar from "./progressBar";
import Beneficts from "./beneficts";
import "./../style.css"
import { useState } from "react";
import { Link } from 'react-router-dom';

const camposP1 = [{ nome: "Título", tipo: "input", key: 1 }, { nome: "Problema atual", tipo: "textarea", key: 2 }, { nome: "Objetivo", tipo: "textarea", key: 3 }, {nome: "Centros de Custo", tipo: "selectInput", key: 4}]

const NewDemanda = () => {
  const [value, setValue] = useState(1)

  return (
    <div>
      {value == 1 &&
        <div>
          <NavBar />
          <div>
            <Directory now={"Nova Demanda"} pass={"home/"} />
            <div className="content">
              <ProgressBar now={value} />
              <SignupForm value={value} nextPage={setValue} inputs={camposP1} />
            </div>
          </div>
          <Link to="/">retornar a página inicial</Link>
        </div>
      }
      {value == 2 &&
        <div>
          <NavBar />
          <div>
            <Directory now={"Nova Demanda"} pass={"home/"} />
            <div className="content">
              <ProgressBar now={value} />
              <Beneficts title="Benefícios reais"/>
              <Beneficts title="Benefícios potenciais"/>
              <Beneficts title="Benefícios qualitativos"/>
            </div>
          </div>
          <Link to="/">retornar a página inicial</Link>
        </div>
      }
    </div>
  );
}

export default NewDemanda;
