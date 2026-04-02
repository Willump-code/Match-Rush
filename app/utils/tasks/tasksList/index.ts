import operationsWithNumbers from "~/utils/tasks/tasksList/operationsWithNumbers";
import tasksMove from "~/utils/tasks/tasksList/tasksMove";
import convertValue from "~/utils/tasks/tasksList/convertValue";
import subsequence from "./subsequence";
import tasksProbability from "./tasksProbability";

export const allTaskMap = {
    operationsWithNumbers,
    tasksMove,
    convertValue,
    subsequence,
    tasksProbability,
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
    {
        id: "tasksProbability",
        name: "Задачи на вероятность",
        emoji: "🎲",
    },
    {
        id: "subsequence",
        name: "Последовательность",
        emoji: "👫🏽",
    },
] as const;
