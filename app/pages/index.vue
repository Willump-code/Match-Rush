<template>
    <PageWrap>
        <h1 class="title">
            <b class="title-bold">MatchRush</b> — Математический тренажёр для быстрого обучения
        </h1>
        <h3 class="description">
            Улучшай навыки арифметики, алгебры и логики с MatchRush! Тренируй скорость, точность и решай задачи онлайн в удобном формате.
        </h3>
        <div class="home__btn-wrap">
            <SecondaryBtn :size="'L'" @click="$router.push('/tasks')" class="home__btn">Решать</SecondaryBtn>
        </div>
    </PageWrap>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .title-bold{
        font-weight: 700;
    }
    .home__btn-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
    }
</style>