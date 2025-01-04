import React, { useState, useContext } from "react";
import './Notes.css';
import Note from "./Note";
import UserContext from "../../UserContext";



const Notes = () => {
    const [notes, setNotes] = useState(['a', 'b', 'c', 'd'])

    const handleChange = (text, id) => {
        console.log(id);

        let newNotes = notes.map((note, i) => (i === id ? text : note))
        setNotes(newNotes);
    }

    const handleRemoveNote = (id) => {
        let newNotes = notes.filter((note, i) => i !== id)
        setNotes(newNotes)

        console.log('clicked ' + id);

    }

    const handleAddNote = () => {
        setNotes(['', ...notes])
    }

    return (<div className="notes-container wrapper">
        <p>
            Your notes:
        </p>
        {notes.map((note, id) => <Note handleRemoveNote={() => handleRemoveNote(id)} handleChange={(text) => handleChange(text, id)} note={note} key={id} />)}
        <button onClick={handleAddNote}>Add note</button>
        <button>Save</button>

    </div>)
}

export default Notes;