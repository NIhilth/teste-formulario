import "./../style.css"

function ProgressBar(props) {

    return (
        <div id="progressbar">
            <div className="pageCircle">
                {/* Informação inicial */}
                {props.now == 1 ? <h1>1</h1> : <span> 1</span>}
            </div>
            <div className="pageCircle">
                {/*Benefícios  */}
                {props.now == 2 ? <h1>2</h1> : <span>2 </span>}
            </div>
            <div className="pageCircle">
                {/* Arquivos */}
                {props.now == 3 ? <h1>3</h1> : <span> 3</span>}
            </div>
        </div>

    )
}

export default ProgressBar