<template>
    <Transition name="popup-shadow">
        <div
            @click="($router.push(`/tasks/`), (popUpStore.isOpen = false))"
            v-if="popUpStore.isOpen"
            class="popup__shadow"
        ></div>
    </Transition>

    <div class="popup__content">
        <Transition name="popup-content">
            <div v-if="popUpStore.isOpen" class="popup__block">
                <h1 class="title">Время окончено</h1>
                <button
                    @click="
                        ($router.push(`/tasks/`), (popUpStore.isOpen = false))
                    "
                    class="popup__close"
                >
                    <img src="@/assets/img/close-popup.png" alt="img" />
                </button>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const popUpStore = usePopUpEndGame();
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
        padding: 80px 0;
        position: relative;
    }
    &__close {
        width: 32px;
        height: 32px;
        position: absolute;
        right: 20px;
        top: 20px;
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
