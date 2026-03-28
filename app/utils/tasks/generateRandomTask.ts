import type { CategoryTask } from "~/types";
export default function generateRandomTask(tasks: CategoryTask[]){
    const index = Math.floor(Math.random() * tasks.length);
    return tasks[index];
}