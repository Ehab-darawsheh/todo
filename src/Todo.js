import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

import './Todo.css'

const Todo = (props) => {
  return (
    <div className="todo">
    <List>
      <ListItem>
        <ListItemText primary={props.todo} />
      </ListItem>
    </List>
    </div>
  );
};
export default Todo;
