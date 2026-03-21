import type { TaskInfo } from "~/types";
import operationsWithNumbers from "./tasks/operationsWithNumbers";
import tasksMove from "./tasks/tasksMove";

export default function generateRandomTask() {
    const tasks = [operationsWithNumbers, tasksMove];
    const step = 1 / tasks.length;
    const randomNumber = Math.random();

    let startIndex = 0;
    let taskIndex = -1;
    while (startIndex < randomNumber) {
        startIndex += step;
        taskIndex += 1;
    }
    return tasks[taskIndex] as (() => TaskInfo);
}
