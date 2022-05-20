
import { useFormik } from 'formik';
import "./../style.css"

const Inputs = (props) => {
    let listaInputs = props.inputs.map((e) => {
        return (
            <div className='input' key={e.key}>
                <label htmlFor={e.nome}>{e.nome}</label>
                {e.tipo == "input" ?
                    <input
                        className='forms-input'
                        id={e.key}
                        name={e.nome}
                        type={e.nome}
                        onChange={props.change}
                        value={props.value[e.key - 1]}
                    />
                    :
                    <textarea
                        className='forms-input'
                        id={e.key}
                        name={e.nome}
                        type={e.nome}
                        onChange={props.change}
                        value={props.value[e.key - 1]}
                    />
                }
            </div>
        )
    })

    return listaInputs
}

const SignupForm = (props) => {
    let numeros = []
    for(let i = 0; i < props.inputs.length; i++){
        numeros[i] = props.inputs[i].nome
    }

    const formik = useFormik({
        initialValues: {
            
        },
        onSubmit: values => {
            console.log(values)
        },
    });
    return (
        <form className='formulario' onSubmit={formik.handleSubmit}>
            <Inputs inputs={props.inputs} value={""} change={formik.handleChange}></Inputs>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm