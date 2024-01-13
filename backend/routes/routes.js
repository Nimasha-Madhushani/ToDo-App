// routes.js
const express = require('express');
const TodoModel = require('../models/model');

const router = express.Router();

router.post('/add', (req, res) => {
  const task = req.body.task;

  TodoModel.create({ task: task })
    .then((result) => res.json(result))
    .catch((err) => {
      console.error('Error saving to database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;
