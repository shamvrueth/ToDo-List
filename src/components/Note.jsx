import React,{useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Note(props){
    const [clicker, setClicker] = useState(0);

    return (
        <div className="note">
            <h1 contentEditable={(clicker) ? true : false}>{props.title}</h1>
            <p contentEditable={(clicker) ? true : false}>{props.content}</p>
            <button onClick={() => {props.onChecked(props.id,clicker); setClicker(0)}}>
                {(clicker)?<CheckIcon />:<DeleteIcon />}
            </button>
            <button className="edit" onClick={() => {props.onEdit(props.id);setClicker(1)}}>
                <EditIcon />
            </button>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Pick a deadline" disablePast />
            </LocalizationProvider>
        </div>
    )
}