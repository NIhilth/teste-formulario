import "./../style.css"

function Directory (props){
    return(
        <div id="directory">
          <span>{props.pass}</span>
          <h2>{props.now}</h2>
        </div>
    )
}

export default Directory