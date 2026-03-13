// Import validator functions
import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {

  if (!validateTitle(title)) {
    return "Invalid title (minimum 3 characters)";
  }

  if (!validatePriority(priority)) {
    return "Priority must be low, medium, or high";
  }

  if (!validateDueDate(dueDate)) {
    return "Due date must be a future date";
  }

  const task = {
    id: tasks.length + 1,
    title: title,
    priority: priority,
    dueDate: dueDate,
    completed: false
  };

  tasks.push(task);

  return "Task added successfully";
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return "Task not found";
  }

  task.completed = true;

  return "Task marked as completed";
}