import "./../style.css"
import { useState } from "react";
import SignupForm from "./forms";


//fazer com que possa se fazer mais de um benefício por categoria
const Beneficts = (props) => {
    const [value, setValue] = useState(1)

    return (
        <div class="beneficios">
            <div className="beneficios-titulo">
                {props.title}
            </div>
            <div className="beneficios-conteudo">
                <div>
                    valor mendal
                    <input></input>
                </div>
            </div>
            <SignupForm value={value} nextPage={setValue} inputs={[{ nome: "Descrição", tipo: "textarea", key: 1 }]} />
        </div>
    )
}

export default Beneficts