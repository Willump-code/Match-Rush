<template>
    <PageWrap>
        <h1 class="title">Классический режим</h1>
        <PlaceQuestion :title="taskInfo.title" :size="taskInfo.sizeQuestion">{{
            taskInfo.question
        }}</PlaceQuestion>
        <PlaceAnswer :correct-answer="taskInfo.answer">Ваш ответ:</PlaceAnswer>
    </PageWrap>
</template>

<script setup lang="ts">
import operationsWithNumbers from "~/utils/tasks/operationsWithNumbers";
const taskInfo = operationsWithNumbers();
</script>

<style scoped lang="scss"></style>
