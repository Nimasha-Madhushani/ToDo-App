const TodoModel = require("../models/model");

const createTodo = async (task) => {
  try {
    const result = await TodoModel.create({ task: task });
    return result;
  } catch (err) {
    console.error("Error saving to database:", err);
    throw err;
  }
};

const getTodo = async () => {
  try {
    const result = await TodoModel.find();
    return result;
  } catch (err) {
    console.error("Error retrieving from database:", err);
  }
};

const updateTodo = async (id) => {
  try {
    const result = await TodoModel.findByIdAndUpdate(
      { _id: id },
      { done: true }
    );
    return result;
  } catch (err) {
    console.error("Error retrieving from database:", err);
  }
};

const deleteTodo = async (id) => {
  try {
    const result = await TodoModel.findByIdAndDelete(
      { _id: id },
      { done: true }
    );
    return result;
  } catch (err) {
    console.error("Error retrieving from database:", err);
  }
};

module.exports = {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
