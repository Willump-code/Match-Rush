import type { TaskInfo } from "~/types";

export default () => {
    const randomNumbersForType = Math.random();
    let type: "typeBall" | "typeCart";
    if (randomNumbersForType > 0.5) {
        type = "typeBall";
    } else {
        type = "typeCart";
    }

    const taskInfo: TaskInfo = {
        title: "Реши задачу",
        question: "",
        answer: "",
        sizeQuestion: "S",
    };

    switch (type) {
        case "typeBall": {
            const ball1 = Math.floor(Math.random() * 10 + 1);
            const ball2 = Math.floor(Math.random() * 10 + 1);

            const prob = Math.floor((ball1 / (ball1 + ball2)) * 100) / 100;

            taskInfo.answer = `${prob}`;
            taskInfo.question = `В мешке ${ball1} красных и ${ball2} синих шариков. Если случайно вынуть один шарик, какова вероятность, что он будет красным? (С точностью до 2 знаков после запятой)`;
            break;
        }

        case "typeCart": {
            const allCart = Math.floor(Math.random() * 20 + 1);
            let correctCart;
            const randomNumb1 = Math.random();

            if (randomNumb1 > 0.75) {
                correctCart = 1;
            } else if (randomNumb1 > 0.5) {
                correctCart = 2;
            } else if (randomNumb1 > 0.25) {
                correctCart = 3;
            } else {
                correctCart = 4;
            }

            const prob = Math.floor((correctCart / allCart) * 100) / 100;

            taskInfo.answer = `${prob}`;
            taskInfo.question = `В колоде ${allCart} карт, из них ${correctCart} туза. Какова вероятность вытащить туза? (С точностью до 2 знаков после запятой)`;
            break;
        }
    }
    return taskInfo;
};
