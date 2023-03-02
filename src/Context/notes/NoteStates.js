import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {
    const notesInitial =[
        {
          "_id": "63ff5607631a712bdd458158",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title updated",
          "description": "Please wake up early updated",
          "tag": "General",
          "date": "2023-03-01T13:41:27.198Z",
          "__v": 0
        },
        {
          "_id": "63ff5607631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63ff5607631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63ff5607631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63ff5607631a712bdd458158",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title updated",
          "description": "Please wake up early updated",
          "tag": "General",
          "date": "2023-03-01T13:41:27.198Z",
          "__v": 0
        },
        {
          "_id": "63ff5607631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63ff5607631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        },
        {
          "_id": "63ff5607631a712bdd45815a",
          "user": "63ff1da9decd85fd3645703d",
          "title": " My Title",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2023-03-01T13:41:27.416Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)



    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;