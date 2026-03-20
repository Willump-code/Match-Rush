<template>
    <div class="task">
        <div class="task__wrap">
            <div class="task__title-wrap">
                <span class="task__emoji">
                    {{ props.emoji }}
                </span>
                <h5 class="task__title">
                    {{ props.title }}
                </h5>
            </div>
            <p class="task__description">
                {{ props.description }}
            </p>
            <PrimaryBtn
                :size="size"
                @click="$router.push(`tasks/${props.link}`)"
                class="task__btn"
                >Решать</PrimaryBtn
            >

            <div class="task__result">
                <span class="task__result-title">{{ props.resultTitle }}</span>
                <span class="task__result-count">12</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const size = ref<"S" | "M" | "L">("M");
function changeSize() {
    if (window.innerWidth > 767) {
        size.value = "M";
    } else {
        size.value = "L";
    }
}
onMounted(() => {
    changeSize();
});
const props = defineProps<{
    emoji: string;
    title: string;
    description: string;
    resultTitle: string;
    link: "blitz" | "classic" | "marathon";
}>();
</script>

<style scoped lang="scss">
.task {
    width: 100%;
    box-shadow: 0px 0 17px 0 rgba(0, 0, 0, 0.2);
    border-radius: 1.2rem;
    padding: 1rem;

    &__wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    &__title-wrap {
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: start;
    }
    &__emoji {
        font-size: clamp(0.9rem, 2.5vw, 1.45rem);
    }
    &__title {
        text-align: center;
        font-size: clamp(1.05rem, 2.7vw, 1.7rem);
    }
    &__description {
        color: $text-color3;
        text-align: center;
        font-size: clamp(0.7rem, 2.1vw, 1.3rem);
    }
    &__result {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;

        &-title {
            font-size: clamp(0.9rem, 2.5vw, 1.4rem);
        }
        &-count {
            font-size: clamp(0.9rem, 2.5vw, 1.4rem);
            font-weight: 700;
        }
    }
}
@media (max-width: 767px) {
    .task {
        &__wrap {
            gap: 1rem;
        }
        &__emoji {
            font-size: 1.5rem;
        }
        &__title {
            font-size: 1.6rem;
        }
        &__description {
            font-size: 1.3rem;
        }
        &__result {
            &-title {
                font-size: 1.5rem;
            }
            &-count {
                font-size: 1.5rem;
            }
        }
    }
}
</style>
