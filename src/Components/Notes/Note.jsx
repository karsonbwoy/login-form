import React, { useState, useContext } from "react";


const Note = ({ note, handleChange, handleRemoveNote }) => {

    return (
        <div className="note-wrapper">
            <div
                className="note-container"
                contentEditable
                suppressContentEditableWarning
                onInput={(e) => handleChange(e.target.innerText)}
            >
                {note}
            </div>
            <button onClick={handleRemoveNote}>x</button>
        </div>
    )
}

export default Note;