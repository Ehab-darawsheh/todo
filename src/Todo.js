import {  List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import db from "./firebase";
import './Todo.css'
import DeleteIcon  from '@mui/icons-material/Delete';

const Todo = (props) => {

  return (
    <div className="todo">
    <List>
      <ListItem>
        <ListItemText primary={props.todo.todo} />
         <DeleteIcon onClick={e => db.collection('todos').doc(props.todo.id).delete()} />
       </ListItem>
    </List>
    </div>
  );
};
export default Todo;
