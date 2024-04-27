import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [note, setNote] = useState({
        title:"",
        content:""
    });
    const [expanded, setExpanded] = useState(0);

    function handleChange(event){
        const {value, name} = event.target;
        setNote((prevValue) => {
            return ({
                ...prevValue,
                [name]: value
            })
        })
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    function button(){
        setNote({
            title:"",
            content:""
        })
        setExpanded(0);
    }

    function expand(){
        setExpanded(1);
    }

    return (
        <div>
        <form className="create-note" onSubmit={handleSubmit}>
            {(expanded) ? <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/> : null}
            <textarea name="content" placeholder="Create a Task..." rows={(expanded) ? "3" : "1"}  onChange={handleChange} value={note.content} onClick={expand}/>
            {(expanded)? <Zoom in={true}>
                <Fab onClick={() => {props.handleClick(note); button()}}>
                    <AddIcon />
                </Fab>
            </Zoom> : null}
        </form>
        </div>
    );
}

export default CreateArea;
