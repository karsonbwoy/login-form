import React, { useState, useContext } from "react";
import './Notes.css';
import Note from "./Note";
import UserContext from "../../UserContext";


const Notes = () => {

    const { updateNotes, userNotes, setUserNotes } = useContext(UserContext)

    const handleChange = (text, id) => {
        let newNotes = userNotes.map((note, i) => (i === id ? text : note))
        setUserNotes(newNotes);
    }

    const handleSave = () => {
        updateNotes();
    }

    const handleRemoveNote = (id) => {
        let newNotes = userNotes.filter((note, i) => i !== id)
        setUserNotes(newNotes);
    }

    const handleAddNote = () => {
        let newNotes = [...userNotes, '']
        setUserNotes(newNotes)
    }

    return (<div className="notes-container wrapper">
        <p>
            Your notes:
        </p>
        {userNotes.map((note, id) => <Note
            handleRemoveNote={() => handleRemoveNote(id)}
            handleChange={(text) => handleChange(text, id)}
            note={note} key={id} />)}
        <button onClick={handleAddNote}>Add note</button>
        <button onClick={handleSave}>Save</button>

    </div>)
}

export default Notes;