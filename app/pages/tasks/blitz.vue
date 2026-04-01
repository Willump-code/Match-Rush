<template>
    <PageWrap>
        <div v-if="taskInfo">
            <h1 class="title" style="color: #2c086b">Счёт: {{ counter }}</h1>
            <PlaceQuestion
                :title="taskInfo.title"
                :size="taskInfo.sizeQuestion"
            >
                {{ taskInfo.question }}
            </PlaceQuestion>
            <progress
                class="blitz__progress"
                :value="time"
                :max="15_000"
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
        startTimer();

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
const time = ref<number>(15_000);
let timeInterval: number;
let start = 0;

function startTimer() {
    start = Date.now();
    clearInterval(timeInterval);

    timeInterval = setInterval(() => {
        const passed = Date.now() - start;
        time.value = 15_000 - passed;
    }, 10);
}
watch(time, (val) => {
    if (val <= 0) {
        clearInterval(timeInterval)
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
    alert("Время оконченно");
    clearInterval(timeInterval);
    const maxCounter = useCounters();
    if (counter.value > maxCounter.counterBlitz) {
        maxCounter.counterBlitz = counter.value;
    }
    counter.value = 0;
}
</script>

<style scoped lang="scss">
.blitz {
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
