
import { useFormik } from 'formik';
import "./../style.css"

const centrosDeCusto = []

const Centros = () => {
    let listaCentros = centrosDeCusto.map((e) => {
        return (
            <div key={e}>{e}</div>
        )
    })

    return listaCentros
}

function adicionarCentro() {
    centrosDeCusto.push(document.getElementsByClassName("input-centros-de-custo")[0].value)
}

const Inputs = (props) => {
    let listaInputs = props.inputs.map((e) => {
        return (
            <div className='input' key={e.key}>
                <label htmlFor={e.nome}>{e.nome}</label>
                {e.tipo == "input" &&
                    <input
                        className='forms-input'
                        id={e.key}
                        name={e.nome}
                        type={e.nome}
                        onChange={props.change}
                        value={props.value[e.key - 1]}
                    />
                }
                {e.tipo == "textarea" &&
                    <textarea
                        className='forms-input'
                        id={e.key}
                        name={e.nome}
                        type={e.nome}
                        onChange={props.change}
                        value={props.value[e.key - 1]}
                    />
                }
                {e.tipo == "selectInput" &&
                    <div>
                        <div id="centros-de-custo">
                            <input
                                className='forms-input input-centros-de-custo'
                                id={e.key}
                                name={e.nome}
                                type={e.nome}
                                onChange={props.change}
                                value={props.value[e.key - 1]}
                            />
                            <button type='button' onClick={adicionarCentro} >Adicionar</button>
                        </div>
                        {/* !!!!!ver como posso renderizar novamente os centos toda a vez que a lista mudar !!!!*/}                        <Centros ></Centros>
                    </div>
                }
            </div >
        )
    })
    return listaInputs
}

const SignupForm = (props) => {
    let numeros = []
    for (let i = 0; i < props.inputs.length; i++) {
        numeros[i] = props.inputs[i].nome
    }

    const formik = useFormik({
        initialValues: {

        },
        onSubmit: values => {
            props.nextPage(props.value + 1)
            console.log(values)
        },
    });
    return (
        <form className='formulario' onSubmit={formik.handleSubmit}>
            <Inputs inputs={props.inputs} value={""} change={formik.handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm