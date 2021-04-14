import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList,setNoteList] = useState([]); 


  function addNote(note) { 
     setNoteList(prevNotes => { 
       return [...prevNotes,note] 
      } );
  }

  function deleteNote(note) { 
    setNoteList(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== note;
      });
    });

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote} />
      { noteList.map((noteItem,index) => 
      <Note 
      key={index} 
      id={index}
      title={noteItem.title} 
      content= {noteItem.content}
      onClicked = {deleteNote}  />
      ) 
      }      
      <Footer />
    </div>
  );
}

export default App;




