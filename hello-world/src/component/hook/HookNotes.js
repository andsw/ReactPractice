import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

function HookNotes() {
  let [notes, setNotes] = useState([]);
  let newTitleRef = useRef(0);
  let newContentRef = useRef(0);
  let newImportantRef = useRef(0);
  useEffect(() => {

    // redux的使用
    // const array = [1, 2, 3, 4, 5];
    // console.log(array.reduce((a, b) => a + b, 0));

    const promise = axios.get("http://localhost:3001/notes");
    promise.then(result => {
      // console.log("result : " + JSON.stringify(result.data));
      setNotes(result.data);
    })
    return () => {
      console.log('counter changed!')
    }
  }/*, [count]*/, [])

  const addNote = (e) => {
    e.preventDefault();
    setNotes(() => {
      return notes.concat({
        id: notes.length + 1,
        title: newTitleRef.current.value,
        content: newContentRef.current.value,
        important: newImportantRef.current.value,
        date: new Date(Date.now()).toLocaleTimeString()
      })
    })
  }

  return (
    <div>
      {notes.map(note => {
        return (<div key={note.id}>
          <h3 style={{color: (note.important ? "red" : "black")}}>title : {note.title}</h3>
          <h5>date : {note.date}</h5>
          <p>content : {note.content}</p>
        </div>)
      })}

      title:<input type="text" ref={newTitleRef}/>
      content: <input type="text" ref={newContentRef}/>
      important: <input type="checkbox" ref={newImportantRef}/>
      <button onClick={addNote}>添加笔记</button>
    </div>
  );
}

export default HookNotes;