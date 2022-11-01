import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase/compat/app";

function App(props) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <FormControl >
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        <Button
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          type="submit"
        >
          Add Todo
        </Button>
      </form>
      <ul className="text">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
