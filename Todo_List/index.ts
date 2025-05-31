import { TaskCategory, TaskStatus } from "./src/models/StatusCategEnums";
import { TodoItem } from "./src/models/TodoItem";
import { TodoList } from "./src/services/todoList";


const todoList = new TodoList<string>();

const task1 = new TodoItem(1, "Prezentáció", TaskCategory.Work, new Date("2025-06-11"), TaskStatus.Processing);
const task2 = new TodoItem(2, "Takarítás", TaskCategory.Home, new Date("2025-06-07"));
const task3 = new TodoItem(3, "Futás", TaskCategory.Health, new Date("2025-05-20"));
const task4 = new TodoItem(4, "Bevásárlás", TaskCategory.Shopping);

todoList.addItem(task1);
todoList.addItem(task2);
todoList.addItem(task3);
todoList.addItem(task4);

console.log("Tasks:");
console.log(todoList.getFullItems());

console.log("Tasks without deadline:");
console.log(todoList.getSimpleItems());

console.log("Deadline tasks:");
console.log(todoList.getDueItems());

const match = todoList.getItemById(2);
console.log("Listed task by ID:");
console.log(match);

console.log("Tasks with done status:");
console.log(todoList.filterByStatus(TaskStatus.Done));

console.log("Work task category:");
console.log(todoList.filterByCategory(TaskCategory.Work));

todoList.deleteItem(task4);
console.log('"Bevásárlás" deleted. Tasks:');
console.log(todoList.getFullItems());

