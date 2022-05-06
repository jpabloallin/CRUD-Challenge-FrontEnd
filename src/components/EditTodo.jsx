import { useContext, useState, useRef } from "react"

const EditTodo = ({updateNote, note}) => {

  const [noteTitle, setNoteTitle] = useState('');

  const editNote = (event) =>{
    const editedNote = event.target.value
    setNoteTitle(editedNote)
  }

  return (
    <div>
      <input onChange={editNote} type="text" name="editNote" placeholder="Edit note"/>
      <button onClick={() => updateNote(note, noteTitle)}>Change title</button>
    </div>
  )

}

export default EditTodo