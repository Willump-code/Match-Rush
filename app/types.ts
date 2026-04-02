export interface TaskInfo {
    title: string;
    question: string;
    answer: string;
    sizeQuestion: "S" | "M" | "L";
}

export type CategoryTask =
    | "operationsWithNumbers"
    | "convertValue"
    | "tasksMove"
    | "tasksProbability"
    | "subsequence";
