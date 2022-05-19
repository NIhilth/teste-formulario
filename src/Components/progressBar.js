import "./../style.css"

function ProgressBar(props) {

    return (
        <div id="progressbar">
            <div className="pageCircle">
                {props.now == 1 ? <h1>Início</h1> : <span> Início</span>}
            </div>
            <div className="pageCircle">
                {props.now == 2 ? <h1>Início</h1> : <span> Início</span>}
            </div>
            <div className="pageCircle">
                {props.now == 3 ? <h1>Início</h1> : <span> Início</span>}
            </div>
        </div>

    )
}

export default ProgressBar