<template>
    <Transition name="popup-shadow">
        <div
            @click="popUpStore.isOpen = false"
            v-if="popUpStore.isOpen"
            class="popup__shadow"
        ></div>
    </Transition>

    <div class="popup__content">
        <Transition name="popup-content">
            <div v-if="popUpStore.isOpen" class="popup__block">
                <div class="popup__wrap">
                    <ul class="popup__list">
                        <li
                            class="popup__item"
                            v-for="task in allTasksList"
                            :key="task.id"
                        >
                            <label class="popup__label">
                                <input
                                    class="popup__input"
                                    type="checkbox"
                                    :value="task.id"
                                    v-model="tasksStore.selectedTasks"
                                />
                                <span class="popup__span">
                                    {{ task.name }} {{ task.emoji }}
                                </span>
                            </label>
                        </li>
                    </ul>
                    <button
                        @click="popUpStore.isOpen = false"
                        class="popup__close"
                    >
                        <img src="@/assets/img/close-popup.png" alt="img" />
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { allTasksList } from "~/utils/tasks/tasksList";
const popUpStore = usePopUpCategoryTask();
const tasksStore = useCategoryTask();
</script>

<style scoped lang="scss">
.popup {
    &__shadow {
        position: fixed;
        z-index: 2;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
    &__content {
        position: fixed;
        z-index: 3;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    &__block {
        width: clamp(300px, 90vw, 600px);
        background-color: $back-color1;
        border-radius: 1.2rem;
    }
    &__wrap {
        position: relative;
        padding: 4rem 0.5rem 4rem 0.5rem;
    }
    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 60vh;
        overflow-y: overlay;
    }
    &__item {
        padding: 8px 0;
    }

    &__label {
        position: relative;
        margin-left: 30px;
    }
    &__span {
        text-decoration: line-through;
        font-size: clamp(18px, 4.5vw, 28px);

        &::before {
            content: "";
            position: absolute;
            border: 2px solid $back-color3;
            left: -30px;
            top: -3px;
            height: 20px;
            width: 20px;
            border-radius: 4px;
        }
        &::after {
            content: "";
            position: absolute;
            left: -23px;
            top: -1px;
            width: 6px;
            height: 12px;
            border: solid #fff;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg) scale(0);
            opacity: 0;
            transition: all 0.3s ease;
        }
    }
    &__input {
        display: none;

        &:checked + .popup__span::after {
            opacity: 1;
            transform: rotate(45deg) scale(1);
        }
        &:checked + .popup__span::before {
            background-color: $back-color3;
        }
        &:checked + .popup__span {
            text-decoration: none;
        }
    }

    &__close {
        width: 32px;
        height: 32px;
        position: absolute;
        right: 20px;
        top: 20px;
    }
}
@media (max-width: 767px) {
    .popup__close {
        width: 20px;
        height: 20px;
    }
}

.popup-shadow-enter-active,
.popup-shadow-leave-active {
    transition: opacity 0.5s ease;
}
.popup-shadow-enter-from,
.popup-shadow-leave-to {
    opacity: 0;
}
.popup-shadow-enter-to,
.popup-shadow-leave-from {
    opacity: 1;
}

.popup-content-enter-active,
.popup-content-leave-active {
    transition: all 0.5s ease;
}
.popup-content-enter-from,
.popup-content-leave-to {
    opacity: 0;
    transform: translateY(500px);
}

.popup-content-enter-to,
.popup-content-leave-from {
    opacity: 1;
    transform: translateY(0px);
}
</style>
