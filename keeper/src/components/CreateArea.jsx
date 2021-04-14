import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  
  const [notes, setNotes] = React.useState({ title: "", content: ""});
  

  function handleChange(event) { 
      const {name,value} = event.target; 

      setNotes(prevItems => {
        return {...prevItems, [name]: value };
      });
      

  } 
  
  function submitNote(event) { 
      
    props.onAdd(notes);
    setNotes({ title: "", content: ""});    
    event.preventDefault(); 


  }

  return (
    <div>
      <form className="create-note">
        <input name="title" onChange={handleChange} placeholder="Title" value={notes.title} />
        <textarea name="content" placeholder="Take a note..." onChange={handleChange} rows="3" value={notes.content} />
        <Fab onClick= {submitNote}> <AddIcon /> </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
