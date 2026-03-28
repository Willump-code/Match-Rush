<template>
    <PageWrap>
        <div v-if="hasTask">
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
import generateRandomTask from "~/utils/tasks/generateRandomTask";
import { allTaskMap } from "~/utils/tasks/tasksList/index";
const selectedTasksStore = useCategoryTask();
const randomTask = generateRandomTask(selectedTasksStore.selectedTasks);

const taskInfo = ref();
const hasTask = ref<boolean>(true);
if (randomTask) {
    taskInfo.value = allTaskMap[randomTask]();
} else {
    hasTask.value = false;
}
function giveAnswer(isCorrect: boolean) {
    if (isCorrect) {
        const newRandomTask = generateRandomTask(
            selectedTasksStore.selectedTasks,
        );
        if (newRandomTask) {
            taskInfo.value = allTaskMap[newRandomTask]();
        } else {
            hasTask.value = false;
        }
    }
}
</script>

<style scoped lang="scss"></style>
