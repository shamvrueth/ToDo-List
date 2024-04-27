import React, {useState} from "react";
import Header from "./Header";
import Footers from "./Footers";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App(){
    const [notes, setNotes] = useState([])

    function newNote(note){
        setNotes((prevValue) => {
            return [...prevValue, note]
        })
    }

    function deleteNote(id,clicker){
        var contenteditable = document.querySelectorAll('[contenteditable]')
        if (clicker === 1){
            setNotes((prevValue) => {
                prevValue.map((note, index) => {
                    if (index===id){
                        prevValue[index].title=contenteditable[0].textContent
                        prevValue[index].content=contenteditable[1].textContent
                    }
                })
                return [...prevValue]
            })
        }
        else{
            setNotes((prevValue) => {
                return prevValue.filter((note, index) => {
                    return index !== id;
                })
            })
        }
    }

    function editNote(id){
        console.log(id)
    }

    return(
        <div>
            <Header />
            <CreateNote handleClick={newNote}/>
            {notes.map((note, index) => {
                return(
                    <Note 
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onChecked={deleteNote}
                        onEdit={editNote}
                    />
                )
            })}
            <Footers />
        </div>
    );
}

export default App;