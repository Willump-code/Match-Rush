<template>
    <PageWrap>
        <PlaceQuestion :title="taskInfo.title" :size="taskInfo.sizeQuestion">
            {{ taskInfo.question }}
        </PlaceQuestion>
        <PlaceAnswer
            @give-answer="giveAnswer"
            :correct-answer="taskInfo.answer"
        ></PlaceAnswer>
    </PageWrap>
</template>

<script setup lang="ts">
import getTaskInfo from "~/utils/generateRandomTask";
const taskInfo = ref(getTaskInfo()());
function giveAnswer(isCorrect: boolean) {
    if (isCorrect) {
        taskInfo.value = getTaskInfo()();
    }
}
</script>

<style scoped lang="scss">
</style>
