
import { useFormik } from 'formik';
import "./../style.css"

const SignupForm = (props) => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            titulo: '',
            problemaAtual: '',
            objetivo: ''
        },
        onSubmit: values => {
            props.nextPage(props.value + 1)
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form className='formulario' onSubmit={formik.handleSubmit}>
            <label htmlFor="titulo">Título</label>
            <input
                className='forms-input'
                id="titulo"
                name="titulo"
                type="titulo"
                onChange={formik.handleChange}
                value={formik.values.titulo}
            />

            <label htmlFor="problemaAtual">Problema Atual</label>
            <textarea
                className='forms-input'
                id="problemaAtual"
                name="problemaAtual"
                type="problemaAtual"
                onChange={formik.handleChange}
                value={formik.values.problemaAtual}
            />

            <label htmlFor="objetivo">Objetivo</label>
            <textarea
                className='forms-input'
                id="objetivo"
                name="objetivo"
                type="objetivo"
                onChange={formik.handleChange}
                value={formik.values.objetivo}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm