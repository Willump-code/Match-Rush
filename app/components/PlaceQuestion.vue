<template>
    <div class="question">
        <div class="question__wrap">
            <h3 class="question__title">
                {{ props.title }}
            </h3>
            <p
                class="question__text"
                :class="{
                    S: props.size === 'S',
                    M: props.size === 'M',
                    L: props.size === 'L',
                }"
            >
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    size: "S" | "M" | "L";
    title: string;
}>();
</script>

<style scoped lang="scss">
.question {
    background-color: $back-color2;
    padding: 2rem;
    border-radius: 1.2rem;
    box-shadow: 0px 0 17px 0 rgba(0, 0, 0, 0.15);

    &__title {
        font-weight: 700;
        text-align: center;
        font-size: clamp(1.5rem, 3vw, 2rem);
        margin-bottom: 35px;
    }
    &__text {
        color: $text-color3;
        text-align: center;

        &.S {
            font-size: clamp(1.19rem, 2.8vw, 1.68rem);
        }

        &.M {
            font-size: clamp(1.45rem, 3.4vw, 2.04rem);
        }

        &.L {
            font-size: clamp(1.7rem, 4vw, 2.4rem);
        }
    }
}
@media (max-width: 767px) {
    .question {
        padding: 1.2rem;
    }
    .question__title {
        margin-bottom: 25px;
    }
}
</style>
