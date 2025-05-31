import { LogAddition } from "../decorators/logAddition";
import { TaskCategory, TaskStatus } from "../models/StatusCategEnums";
import { TodoItem } from "../models/TodoItem";

export class TodoList<T> {
    private items: Map<number, TodoItem<T>> = new Map();

    @LogAddition
    addItem(item: TodoItem<T>): void {
        this.items.set(item.id, item);
        console.log(`Item added: ${item.id}, deadline: ${item.dueDate ? item.dueDate : "-"}`);
    }

    deleteItem(item: TodoItem<T>): void {
        this.items.delete(item.id);
        console.log(`Item deleted: ${item.id}, deadline: ${item.dueDate ? item.dueDate : "-"}`);
    }

    getFullItems(): TodoItem<T>[] {
        return [...this.items.values()];
    }

    getSimpleItems(): TodoItem<T>[] {
        return [...this.items.values()].filter(item => !item.dueDate);
    }

    getDueItems(): TodoItem<T>[] {
        return [...this.items.values()].filter(item => item.dueDate);
    }

    getItemById(id: number): TodoItem<T> | undefined {
        return this.items.get(id);
    }

    filterByCategory(category: TaskCategory): TodoItem<T>[] {
        return [...this.items.values()].filter(item => item.category === category);
    }

    filterByStatus(status: TaskStatus): TodoItem<T>[] {
        return [...this.items.values()].filter(item => item.status === status);
    }
}