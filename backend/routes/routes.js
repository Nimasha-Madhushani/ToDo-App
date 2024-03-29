const express = require("express");
const todoService = require("../services/todoService");
const TodoModel = require("../models/model");

const router = express.Router();

router.post("/add", async (req, res) => {
  const task = req.body.task;

  try {
    const result = await todoService.createTodo(task);
    res.json(result);
  } catch (err) {
    console.error("Error handling request:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    const result = await todoService.getTodo();
    res.json(result);
  } catch (err) {
    console.error("Error handling request:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await todoService.updateTodo(id);
    res.json(result);
  } catch (err) {
    console.error("Error handling request:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await todoService.deleteTodo(id);
    res.json(result);
  } catch (err) {
    console.error("Error handling request:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
