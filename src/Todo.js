import {
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import db from "./firebase";
import "./Todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  padding: 5,
};

const Todo = (props) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Edit Todo
          </Typography>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={props.todo.todo}
          />
          <Button disabled={!input} variant="contained" onClick={updateTodo}>
            Update
          </Button>
        </Box>
      </Modal>
      <div className="todo">
        <List>
          <ListItem>
          <ListItemText className="text" primary={props.todo.todo} />
            <DeleteIcon
              onClick={() => db.collection("todos").doc(props.todo.id).delete()}
            />
            <EditIcon onClick={handleOpen} />
          </ListItem>
        </List>
      </div>
    </>
  );
};
export default Todo;
