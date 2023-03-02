import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=> {

    const s1 = {
        "name": "bhagwat",
        "class": "5A"
    }

    const [state, setstate] = useState(s1);
    const update =()=>{
        setTimeout(()=>{
    setstate(
        {
            "name":"Akash",
            "class":"7B"
        } )
         },4000);
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;