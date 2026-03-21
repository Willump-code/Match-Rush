<template>
    <div class="answer">
        <div class="answer__wrap">
            <form @submit.prevent @submit="giveAnswer">
                <div class="answer__form-wrap">
                    <input
                        class="answer__input"
                        type="number"
                        v-model="answer"
                    />
                    <PrimaryBtn type="submit" class="answer__btn" :size="'M'"
                        >Дать ответ</PrimaryBtn
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const answer = ref();
const props = defineProps<{
    correctAnswer: string;
}>();
const emit = defineEmits<{
    (e: "giveAnswer", isCorrect: boolean): void;
}>();
function giveAnswer() {
    console.log(answer.value, props.correctAnswer);
    if (answer.value === Number(props.correctAnswer)) {
        answer.value = "";
        emit("giveAnswer", true);
    } else {
        emit("giveAnswer", false);
    }
}
</script>

<style scoped lang="scss">
.answer {
    background-color: $back-color2;
    padding: 2rem;
    border-radius: 1.2rem;
    margin-top: 30px;
    box-shadow: 0px 0 17px 0 rgba(0, 0, 0, 0.15);

    &__form-wrap {
        display: flex;
        gap: 32px;
    }
    &__input {
        background-color: $back-color1;
        border-radius: 1.2rem;
        flex: 1;
        padding: 0.5rem;
        font-size: 2rem;
    }
}
@media (max-width: 767px) {
    .answer {
        padding: 1.2rem;
    }
    .answer__form-wrap {
        flex-wrap: wrap;
        gap: 24px;
    }
    .answer__input {
        font-size: 1.2rem;
    }
    .answer__btn {
        width: 100%;
    }
}
</style>
