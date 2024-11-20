import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Footer from  "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";

function App() {

  const [notesArray, setNotes] = useState([]);

  function addNote (note) {
    setNotes((prevItems) => {
      return [...prevItems, note];
    })
  };

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })

  };

  return (
    <div className="App">
      <Header />

      <InputArea onAdd={addNote} />

      {notesArray.map((item, index) => 
        <Note 
          id={index}
          key={index}
          title={item.title}
          content={item.content}
          isClicked={deleteNote}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;