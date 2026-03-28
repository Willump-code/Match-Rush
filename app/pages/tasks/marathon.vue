<template>
    <PageWrap>
        <div v-if="taskInfo">
            <h1 class="title">Счёт</h1>
            <PlaceQuestion
                :title="taskInfo.title"
                :size="taskInfo.sizeQuestion"
            >
                {{ taskInfo.question }}
            </PlaceQuestion>
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

function giveAnswer(isCorrect: boolean) {
    if (isCorrect) {
        const newRandomTaskId = generateRandomTask(taskIdList.value);
        if (newRandomTaskId) {
            taskInfo.value = allTaskMap[newRandomTaskId]();
        } else {
            taskInfo.value = null;
        }
    }
}
</script>

<style scoped lang="scss"></style>
