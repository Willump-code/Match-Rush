<template>
    <PageWrap>
        <div v-if="taskInfo">
            <PlaceQuestion
                :title="taskInfo.title"
                :size="taskInfo.sizeQuestion"
            >
                {{ taskInfo.question }}
            </PlaceQuestion>
            <PlaceAnswer
                @give-answer="giveAnswer"
                :correct-answer="taskInfo.answer"
            ></PlaceAnswer>
        </div>
        <h1 v-else class="title">Ты не выбрал(а) категории задач</h1>
    </PageWrap>
</template>

<script setup lang="ts">
import type { TaskInfo } from "~/types";
import generateRandomTask from "~/utils/tasks/generateRandomTask";
import { allTaskMap } from "~/utils/tasks/tasksList/index";
const selectedTasksStore = useCategoryTask();
const counterStore = useCounters();
const achieveStore = useAchieves();

// генерация задач
const randomTask = generateRandomTask(selectedTasksStore.selectedTasks);
const taskInfo = ref<TaskInfo | null>();
if (randomTask) {
    taskInfo.value = allTaskMap[randomTask]();
} else {
    taskInfo.value = null;
}

// дан ответ
function giveAnswer(isCorrect: boolean) {
    if (isCorrect) {
        counterStore.counterClassic += 1;
        if (
            counterStore.counterClassic >= 5 &&
            !achieveStore.finishedAchieves.includes("classic5")
        ) {
            achieveStore.finishedAchieves.push("classic5");
        }
        if (
            counterStore.counterClassic >= 20 &&
            !achieveStore.finishedAchieves.includes("classic20")
        ) {
            achieveStore.finishedAchieves.push("classic20");
        }
        if (
            counterStore.counterClassic >= 100 &&
            !achieveStore.finishedAchieves.includes("classic100")
        ) {
            achieveStore.finishedAchieves.push("classic100");
        }
        const newRandomTask = generateRandomTask(
            selectedTasksStore.selectedTasks,
        );
        if (newRandomTask) {
            taskInfo.value = allTaskMap[newRandomTask]();
        } else {
            taskInfo.value = null;
        }
    }
}
</script>

<style scoped lang="scss"></style>
