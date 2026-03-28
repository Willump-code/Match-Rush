import type { TaskInfo } from "~/types";

export default () => {
    const randomNumbers0 = Math.random();
    let typeConvert: "t" | "v" | "s";
    if (randomNumbers0 > 0.66) {
        typeConvert = "s";
    } else if (randomNumbers0 > 0.33) {
        typeConvert = "v";
    } else {
        typeConvert = "t";
    }

    const taskInfo: TaskInfo = {
        title: "Конвертируй значениe",
        question: "",
        answer: "",
        sizeQuestion: "M",
    };

    switch (typeConvert) {
        case "s": {
            const randomNumbers1 = Math.random();
            const randomNumbers2 = Math.random();
            if (randomNumbers1 < 0.5) {
                let hectare = 1;
                if (Math.floor(randomNumbers2 * 10) !== 0) {
                    hectare = Math.floor(randomNumbers2 * 10);
                }
                let meter = hectare * 10_000;
                taskInfo.question = `Переведи ${hectare} гект. в м^2`;
                taskInfo.answer = `${meter}`;
            } else {
                let kilom = 1;
                if (Math.floor(randomNumbers2 * 10) * 0.01 !== 0) {
                    kilom = Math.floor(randomNumbers2 * 10) * 0.01;
                }
                let meter = kilom * 1_000_000;
                taskInfo.question = `Переведи ${kilom} км^2 в м^2`;
                taskInfo.answer = `${meter}`;
            }

            break;
        }
        case "v": {
            const randomNumbers1 = Math.random();
            const randomNumbers2 = Math.random();
            if (randomNumbers1 > 0.5) {
                let v1 = Math.floor(randomNumbers2 * 100);
                let v2 = v1 * 3.6;
                taskInfo.question = `Переведи ${v1} м/с в км/ч`;
                taskInfo.answer = `${v2}`;
            } else {
                let v1 = Math.floor(randomNumbers2 * 100) * 3.6;
                let v2 = v1 / 3.6;
                taskInfo.question = `Переведи ${v1} км/ч в м/c`;
                taskInfo.answer = `${v2}`;
            }
            break;
        }
        case "t": {
            const randomNumbers1 = Math.random();
            const randomNumbers2 = Math.random();
            let hour = Math.floor(randomNumbers1 * 10);
            let min = Math.floor(randomNumbers2 * 100);
            let sec = hour * 3600 + min * 60;
            taskInfo.question = `Переведи ${hour} час. ${min} мин. в секунды`;
            taskInfo.answer = `${sec}`;
            break;
        }
    }
    return taskInfo;
};
