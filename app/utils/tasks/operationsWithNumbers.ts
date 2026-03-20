import type { TaskInfo } from "~/types";

export default () => {
    const randomNumbersForSign = Math.random();
    let sign: "+" | "-" | "*" | "/";
    if (randomNumbersForSign > 0.75) {
        sign = "+";
    } else if (randomNumbersForSign > 0.5) {
        sign = "-";
    } else if (randomNumbersForSign > 0.25) {
        sign = "*";
    } else {
        sign = "/";
    }

    const taskInfo: TaskInfo = {
        title: "Дай ответ",
        question: "",
        answer: "",
        sizeQuestion: "L",
    };
    const randomNumbers1 = Math.random();
    const randomNumbers2 = Math.random();
    let n1: number;
    let n2: number;
    switch (sign) {
        case "+":
            n1 = Math.floor(randomNumbers1 * 10_000);
            n2 = Math.floor(randomNumbers2 * 10_000);
            taskInfo.answer = `${n1 + n2}`;
            taskInfo.question = `${n1} + ${n2} = ?`;
            break;
        case "-":
            n1 = Math.floor(randomNumbers1 * 10_000);
            n2 = Math.floor(randomNumbers2 * 10_000);
            taskInfo.answer = `${n1 - n2}`;
            taskInfo.question = `${n1} - ${n2} = ?`;
            break;
        case "*":
            n1 = Math.floor(randomNumbers1 * 10);
            n2 = Math.floor(randomNumbers2 * 10);
            taskInfo.answer = `${n1 * n2}`;
            taskInfo.question = `${n1} * ${n2} = ?`;
            break;
        case "/":
            n2 = Math.floor(randomNumbers2 * 100);
            n1 = n2 * Math.floor(randomNumbers1 * 100);
            taskInfo.answer = `${n1 / n2}`;
            taskInfo.question = `${n1} / ${n2} = ?`;
            break;
    }
    return taskInfo;
};
