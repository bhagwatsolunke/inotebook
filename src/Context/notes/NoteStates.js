import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {
    const notesInitial =[
        {
          "_id": "633ff5607631a712bdd458158",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title updated",
          "description": "Please wake up early updated",
          "tag": "General",
          "date": "2023-03-01T13:41:27.198Z",
          "__v": 0
        },
        {
          "_id": "63ff55607631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63ff56074631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63ff56407631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63ff56047631a712bdd458158",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title updated",
          "description": "Please wake up early updated",
          "tag": "General",
          "date": "2023-03-01T13:41:27.198Z",
          "__v": 0
        },
        {
          "_id": "63ff5607631a7512bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63f4f5607631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63ff56076351a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
      // Add a Note
      const addNote = (title, description, tag)=>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
          "_id": "61322f119553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a0664",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        };
        setNotes(notes.concat(note)) 
      }

      // Delete a Note
      const deleteNote = ()=>{

      }
      // Edit a Note
      const editNote = ()=>{

      }



    return (
      <NoteContext.Provider value={{notes, addNote,deleteNote, editNote }}>            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;