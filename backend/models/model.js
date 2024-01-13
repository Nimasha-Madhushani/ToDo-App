const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

const TodoModel = mongoose.model('todos', todoSchema);

module.exports = TodoModel;
