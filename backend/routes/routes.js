const express = require('express');
const todoService = require('../services/todoService');

const router = express.Router();

router.post('/add', async (req, res) => {
  const task = req.body.task;

  try {
    const result = await todoService.createTodo(task);
    res.json(result);
  } catch (err) {
    console.error('Error handling request:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
