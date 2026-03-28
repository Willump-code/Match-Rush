<template>
    <PageWrap>
        <h1 class="title">Решай задачи в удобном для тебя режиме</h1>
        <h3 class="description">Выбери режим решения задач:</h3>
        <ul class="tasks">
            <li class="task-wrap">
                <AnimationMountedWrap :time-after-mounted="300">
                    <Task
                        :type-task-btn="true"
                        emoji="😀"
                        title="Классика"
                        description="Выбирай категории задач и решай их без ограничения по времени"
                        result-title="Решено задач:"
                        :result="counters.counterClassic"
                        link="classic"
                    >
                    </Task>
                </AnimationMountedWrap>
            </li>
            <li class="task-wrap">
                <AnimationMountedWrap :time-after-mounted="600">
                    <Task
                        :type-task-btn="false"
                        emoji="🫨​"
                        title="Блиц"
                        description="Устанавливай новые рекорды, решая каждую задачу за 15 секунд"
                        result-title="Рекорд:"
                        :result="counters.counterBlitz"
                        link="blitz"
                    >
                    </Task>
                </AnimationMountedWrap>
            </li>
            <li class="task-wrap">
                <AnimationMountedWrap :time-after-mounted="900">
                    <Task
                        :type-task-btn="false"
                        emoji="😰​"
                        title=" Марафон"
                        description="У тебя есть 2 минуты, реши как можно больше задач"
                        result-title="Рекорд:"
                        :result="counters.counterMarathon"
                        link="marathon"
                    >
                    </Task>
                </AnimationMountedWrap>
            </li>
        </ul>
    </PageWrap>
</template>

<script setup lang="ts">
const counters = useCounters()
</script>

<style scoped lang="scss">
.tasks {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 3%;
    margin-top: 40px;
}
.task-wrap {
    flex: 1;
}

@media (max-width: 767px) {
    .tasks {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .task-wrap {
        width: 70%;
    }
}
@media (max-width: 500px) {
    .task-wrap {
        width: 100%;
    }
}
</style>
