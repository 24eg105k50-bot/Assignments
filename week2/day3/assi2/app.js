// Import task functions
import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. Add tasks
console.log(addTask("Finish assignment", "high", "2026-03-20"));
console.log(addTask("Buy groceries", "medium", "2026-03-18"));
console.log(addTask("Go to gym", "low", "2026-03-15"));

// 2. Display tasks
console.log("All Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(2));

// 4. Display tasks again
console.log("Updated Tasks:");
console.log(getAllTasks());