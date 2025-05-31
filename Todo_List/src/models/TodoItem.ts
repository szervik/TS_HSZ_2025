import { isValidAndNotPastDate } from "../utils/typeGuards";
import { TaskCategory, TaskStatus } from "./StatusCategEnums";

export class TodoItem<T> {
    public status: TaskStatus;

    constructor(
        public id: number,
        public content: T,
        public category: TaskCategory = TaskCategory.Other,
        public dueDate?: Date | string,
        status: TaskStatus = TaskStatus.New
    ) {
        this.status = status;

        if (dueDate && !isValidAndNotPastDate(dueDate)) {
            console.warn(`Invalid date: ${dueDate}`);
        }
    }
}