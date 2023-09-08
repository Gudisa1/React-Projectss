import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    margin: "8px 0",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
  },
  buttons: {
    marginLeft: "auto",
  },
}));

const headingStyle = {
  borderRadius: "8px", // Apply a border radius of 8px
  padding: "12px", // Add some padding for better aesthetics
  textAlign: "center", // Center-align the text
  backgroundColor: "#f0f0f0", // Background color
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a shadow
  fontFamily: "Arial, sans-serif", // Specify font-family
  fontSize: "36px", // Adjust font size
  fontWeight: "bold", // A
};

const Todo = () => {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isEditting, setIsEditting] = useState({ id: null, value: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditting.id !== null) {
      const updatedList = list.map((item) =>
        item.id === isEditting.id ? { ...item, text: input } : item
      );
      setList(updatedList);
      setIsEditting({ id: null, value: "" });
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 100000),
        text: input,
        isComplete: false,
        isEditting: false,
      };
      setList([...list, newTodo]);
    }
    setInput("");
  };

  const handleDelete = (id) => {
    const newList = list.filter((filter) => filter.id !== id);
    setList(newList);
  };

  const handleEdit = (id, action) => {
    const selectedItem = list.find((item) => item.id === id);
    setInput(selectedItem.text);
    setIsEditting({ id, value: selectedItem.text });
  };
  return (
    <>
      <Typography variant="h2" style={headingStyle}>
        Todo App
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter Text"
          variant="outlined"
          fullWidth
          style={{
            paddingBottom: "8px",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
      <List className={classes.root}>
        {list.map((item) => (
          <ListItem key={item.id} className={classes.listItem}>
            <ListItemText primary={item.text} />
            <ListItemSecondaryAction className={classes.buttons}>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEdit(item.id, "edit")}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Todo;
