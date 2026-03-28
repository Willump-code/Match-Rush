import type { TaskInfo } from "~/types";

export default () => {
    const randomNumbers0 = Math.random();
    let whatFind: "v" | "t" | "s";
    if (randomNumbers0 > 0.66) {
        whatFind = "v";
    } else if (randomNumbers0 > 0.33) {
        whatFind = "t";
    } else {
        whatFind = "s";
    }

    const taskInfo: TaskInfo = {
        title: "Реши задачу",
        question: "",
        answer: "",
        sizeQuestion: "S",
    };

    const randomNumbers1 = Math.random();
    const randomNumbers2 = Math.random();
    let v: number;
    let t: number;
    let s: number;

    switch (whatFind) {
        case "s":
            v = Math.floor(randomNumbers1 * 100);
            t = Math.floor(randomNumbers2 * 100);
            s = v * t;
            taskInfo.question = `Автомобиль ехал со скоростью ${v} км/ч в течение ${t} ч. Найди пройденное расстояние(км).`;
            taskInfo.answer = `${s}`;
            break;
        case "v":
            t = Math.floor(randomNumbers1 * 100);
            s = t * Math.floor(randomNumbers2 * 100);
            v = s / t;
            taskInfo.question = `Автомобиль проехал ${s} км за ${t} ч. Найди скорость автомобиля(км/ч).`;
            taskInfo.answer = `${v}`;
            break;
        case "t":
            v = Math.floor(randomNumbers1 * 100);
            s = v * Math.floor(randomNumbers2 * 100);
            t = s / v;
            taskInfo.question = `Автомобиль движется со скоростью ${v} км/ч и должен проехать ${s} км. Найди время движения(ч).`;
            taskInfo.answer = `${t}`;
            break;
    }
    return taskInfo;
};
