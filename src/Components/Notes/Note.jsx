import React, { useState, useContext } from "react";


const Note = ({ note, handleChange, handleRemoveNote }) => {

    return (
        <div className="note-wrapper">
            <textarea
                className="note-input"
                onChange={(e) => handleChange(e.target.value)}
                value={note}
            />
            <button onClick={handleRemoveNote}>x</button>
        </div>
    )
}

export default Note;

