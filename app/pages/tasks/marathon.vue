<template>
    <PageWrap>
        <div v-if="taskInfo">
            <h1 class="title">Счёт: {{ counter }}</h1>
            <PlaceQuestion
                :title="taskInfo.title"
                :size="taskInfo.sizeQuestion"
            >
                {{ taskInfo.question }}
            </PlaceQuestion>
            <progress
                class="marathon__progress"
                :value="time"
                :max="180_000"
            ></progress>
            <PlaceAnswer
                :correct-answer="taskInfo.answer"
                @give-answer="giveAnswer"
            >
            </PlaceAnswer>
        </div>
        <h1 v-else class="title">Пока задач нет</h1>
    </PageWrap>
</template>

<script setup lang="ts">
import type { CategoryTask, TaskInfo } from "~/types";
import generateRandomTask from "~/utils/tasks/generateRandomTask";
import { allTasksList } from "~/utils/tasks/tasksList";
import { allTaskMap } from "~/utils/tasks/tasksList";
const counterStore = useCounters();
const popUpStore = usePopUpEndGame();
const achieveStore = useAchieves();

// генерация задач
const taskIdList = ref<CategoryTask[]>([]);
for (const i of allTasksList) {
    taskIdList.value.push(i.id);
}
const randomTaskId = generateRandomTask(taskIdList.value);
const taskInfo = ref<TaskInfo | null>();
if (randomTaskId) {
    taskInfo.value = allTaskMap[randomTaskId]();
} else {
    taskInfo.value = null;
}

// дан ответ
function giveAnswer(isCorrect: boolean) {
    if (isCorrect) {
        const newRandomTaskId = generateRandomTask(taskIdList.value);
        if (newRandomTaskId) {
            taskInfo.value = allTaskMap[newRandomTaskId]();
            counter.value += 1;
        } else {
            taskInfo.value = null;
        }
    }
}

// работа таймера
const time = ref<number>(180_000);
let timeInterval: number;
let start = 0;

function startTimer() {
    start = Date.now();
    clearInterval(timeInterval);

    timeInterval = setInterval(() => {
        const passed = Date.now() - start;
        time.value = 180_000 - passed;
    }, 10);
}
watch(time, (val) => {
    if (val <= 0) {
        clearInterval(timeInterval);
        endGame();
    }
});
onMounted(() => {
    startTimer();
});

// счётчик
const counter = ref<number>(0);

// поражение
function endGame() {
    clearInterval(timeInterval);
    popUpStore.isOpen = true;

    if (counter.value > counterStore.counterMarathon) {
        counterStore.counterMarathon = counter.value;
    }

    if (
        counterStore.counterMarathon >= 5 &&
        !achieveStore.finishedAchieves.includes("marathon5")
    ) {
        achieveStore.finishedAchieves.push("marathon5");
    }
    if (
        counterStore.counterMarathon >= 12 &&
        !achieveStore.finishedAchieves.includes("marathon12")
    ) {
        achieveStore.finishedAchieves.push("marathon12");
    }
    if (
        counterStore.counterMarathon >= 20 &&
        !achieveStore.finishedAchieves.includes("marathon20")
    ) {
        achieveStore.finishedAchieves.push("marathon20");
    }

    counter.value = 0;
}
</script>

<style scoped lang="scss">
.marathon {
    &__progress {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 20px;
        margin-top: 30px;

        &::-webkit-progress-bar {
            background-color: #eee;
            border-radius: 10px;
        }
        &::-webkit-progress-value {
            background-color: $back-color3;
            border-radius: 10px;
        }
        &::-moz-progress-bar {
            background-color: $back-color3;
            border-radius: 10px;
        }
    }
}
@media (max-width: 767px) {
    .blitz__progress {
        height: 16px;
        margin-top: 22px;
    }
}
</style>
