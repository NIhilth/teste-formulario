import NavBar from "./navBar";
import SignupForm from "./forms";
import Directory from "./directory";
import ProgressBar from "./progressBar";
import "./../style.css"
import { useState } from "react";
import { Link } from 'react-router-dom';

const NewDemanda = () => {
  const [value, setValue] = useState(1)
  return (
    <div>
      <NavBar />
      <div>
        <Directory now={"Nova Demanda"} pass={"home/"}/>
        <div className="content">
          <ProgressBar now={value} />
          <SignupForm value={value} nextPage={setValue}></SignupForm>
        </div>
      </div>
      <Link to="/">retornar a página inicial</Link>
    </div>
  );
}

export default NewDemanda;
