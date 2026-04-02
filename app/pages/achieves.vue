<template>
    <PageWrap>
        <h1 class="title">Достижения</h1>
        <h3 class="description">
            Отслеживайте свои успехи в математическом тренажёре и наблюдайте за
            своим прогрессом в обучении.
        </h3>
        <ul class="achieves">
            <li
                class="achieves__item"
                v-for="achieve in achievesStore.allAchieves"
                :key="achieve.id"
            >
                <div class="achieves__icon">
                    <span
                        v-if="achieveFinished(achieve.id)"
                        class="achieves__icon-span"
                    >
                        {{ achieve.icon }}
                    </span>
                    <span v-else class="achieves__icon-span"> 🔒 </span>
                </div>
                <div class="achieves__description">
                    {{ achieve.description }}
                </div>
            </li>
        </ul>
    </PageWrap>
</template>

<script setup lang="ts">
const achievesStore = useAchieves();
function achieveFinished(valId: string) {
    for (const i of achievesStore.finishedAchieves) {
        if (i === valId) {
            return true;
        }
    }
    return false;
}
</script>

<style scoped lang="scss">
.achieves {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px 0;

    &__item {
        border: 2px solid $back-color3;
        padding: 0.8rem;
        border-radius: 2rem;
        width: 30%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }
    &__icon {
        width: 60%;
        padding: 5px 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        &-span {
            font-size: 2.8rem;
            color: $text-color1;
        }
    }
    &__description {
        font-size: 1.3rem;
        text-align: center;
    }
}
@media (max-width: 767px) {
    .achieves__item {
        width: 48%;
    }
}
@media (max-width: 480px) {
    .achieves {
        justify-content: center;
    }
    .achieves__item {
        width: 90%;
    }
    .achieves__icon-span {
        font-size: 2.6rem;
    }
    .achieves__description {
        font-size: 1.2rem;
    }
}
</style>
