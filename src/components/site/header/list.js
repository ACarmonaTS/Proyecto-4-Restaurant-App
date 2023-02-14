import { Link } from "react-router-dom"

function CreateList(props){
    return( <li><Link className="linkRouter" to={props.href}>{props.data}</Link></li> )
}

export default CreateList