import React, { useEffect } from "react";
import Create from "../Create";
import { useState } from "react";
import axios from "axios";
import { Grid, Checkbox } from "@mui/material";
import "./Home.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  background: "lightblue",
  textAlign: "left",
  marginBottom: "10px",
  color: theme.palette.text.secondary,
}));
function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit =async (id) => {
   await axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        window.location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>ToDo List</h2>
      <Create />
      <Box padding={10}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              {todos.length === 0 ? (
                <div>
                  <h2>No Record</h2>
                </div>
              ) : (
                <div>
                  {todos.map((todo) => (
                    <div className="todo._id">
                      <Grid container spacing={1}>
                        <Grid item xs>
                          <Item>
                            <div onClick={() => handleEdit(todo._id)}>
                              {todo.done ? (
                                <Checkbox defaultChecked />
                              ) : (
                                <Checkbox />
                              )}
                            </div>
                          </Item>
                        </Grid>
                        <Grid item xs={9}>
                          <Item>
                            <p className={todo.done ? "line_through" : ""}>
                              {todo.task}
                            </p>
                          </Item>
                        </Grid>
                        <Grid item xs>
                          <Item>
                            <button
                              className="delete-button"
                              onClick={() => handleDelete(todo._id)}
                            >
                              <DeleteIcon />
                            </button>
                          </Item>
                        </Grid>
                      </Grid>
                    </div>
                  ))}
                </div>
              )}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
