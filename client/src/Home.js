import React, { useEffect } from "react";
import Create from "./Create";
import { useState } from "react";
import axios from "axios";

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
  return (
    <div>
      <h2>ToDo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => <div>{todo.task}</div>)
      )}
    </div>
  );
}

export default Home;
