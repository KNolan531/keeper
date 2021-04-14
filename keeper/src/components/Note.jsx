import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Theme from '@material-ui/core'; 


function Note(props) {




  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>   
      <Button
        variant ="contained"
        style = {{backgroundColor: "#13245c"}}
        className="deleteButton"
        startIcon={<DeleteIcon />}
        onClick = 
      { () => {
        props.onClicked(props.id); 
      }}
      >
        Delete
      </Button>   
      
    </div>
  );
}

export default Note;