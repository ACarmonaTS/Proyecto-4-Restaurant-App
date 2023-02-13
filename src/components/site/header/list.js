function CreateList(props){
    console.log(props)
    return( <li><link href={props.href} />{props.data}</li> )
}

export default CreateList