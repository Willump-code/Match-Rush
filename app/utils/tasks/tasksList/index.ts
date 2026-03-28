import operationsWithNumbers from "~/utils/tasks/tasksList/operationsWithNumbers";
import tasksMove from "~/utils/tasks/tasksList/tasksMove";
import convertValue from "~/utils/tasks/tasksList/convertValue";

export const allTaskMap = {
    operationsWithNumbers,
    tasksMove,
    convertValue,
};
export const allTasksList = [
    {
        id: "operationsWithNumbers",
        name: "Простые вычисления",
        emoji: "🐣",
    },
    {
        id: "convertValue",
        name: "Конвертирование величин",
        emoji: "🔄",
    },
    {
        id: "tasksMove",
        name: "Задачи на движение",
        emoji: "🚗",
    },
] as const;
