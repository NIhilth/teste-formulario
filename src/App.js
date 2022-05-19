import NavBar from "./Components/navBar";
import SignupForm from "./Components/forms";
import Directory from "./Components/directory";
import ProgressBar from "./Components/progressBar";
import "./style.css"
import { useState } from "react";

function App() {
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
    </div>
  );
}

export default App;
