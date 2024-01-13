const TodoModel = require('../models/model');

const createTodo = async (task) => {
  try {
    const result = await TodoModel.create({ task: task });
    return result;
  } catch (err) {
    console.error('Error saving to database:', err);
    throw err;
  }
};

module.exports = {
  createTodo,
};
