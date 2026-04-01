import type { TaskInfo } from "~/types";

export default () => {
    const randomNumbersForSign = Math.random();
    let sign: "+" | "*";
    if (randomNumbersForSign > 0.5) {
        sign = "+";
    } else {
        sign = "*";
    }

    const taskInfo: TaskInfo = {
        title: "Продолжи последовательность",
        question: "",
        answer: "",
        sizeQuestion: "L",
    };

    switch (sign) {
        case "+":{
            const start = Math.floor(Math.random() * 100);
            const step = Math.floor(Math.random() * 100);
            taskInfo.answer = `${start + 3 * step}`;
            taskInfo.question = `${start} - ${start + step} - ${start + 2 * step} - ?`;
            break;
        }
        case "*":{
            const start = Math.floor(Math.random() * 10);
            const step = Math.floor(Math.random() * 10 + 1);
            taskInfo.answer = `${start * step * step * step}`;
            taskInfo.question = `${start} - ${start * step} - ${start * step * step} - ?`;
            break;
        }
    }
    return taskInfo;
};
