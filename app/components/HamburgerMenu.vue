<template>
    <Transition name="menu-shadow">
        <div
            @click="hamburgerMenu.isOpen = false"
            v-if="hamburgerMenu.isOpen"
            class="menu-shadow"
        ></div>
    </Transition>
    <Transition name="menu-content">
        <div v-if="hamburgerMenu.isOpen" @click.stop class="menu">
            <div class="menu__close" @click="hamburgerMenu.isOpen = false">
                <img src="@/assets/img/close-menu.png" alt="close modal" />
            </div>
            <div class="menu__wrap">
                <MyNav
                    class="menu__nav"
                    :link-color="'$text-color2'"
                    :flex-direction="'column'"
                    :align-items="'start'"
                >
                </MyNav>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const hamburgerMenu = useHamburgerMenu();
</script>

<style scoped lang="scss">
.menu-shadow {
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
}
.menu {
    position: fixed;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    overflow: hidden;
    background-color: $back-color3;

    &__close {
        position: absolute;
        right: 22px;
        top: 22px;
        width: 32px;
        height: 32px;
    }
    &__wrap {
        margin: 0 30px 70px 30px;
    }
    &__nav {
        color: $text-color2;
    }
}

.menu-shadow-enter-active,
.menu-shadow-leave-active {
    transition: opacity 0.5s ease;
}

.menu-content-enter-active,
.menu-content-leave-active {
    transition: transform 0.5s ease;
}

.menu-shadow-enter-from,
.menu-shadow-leave-to {
    opacity: 0;
}

.menu-shadow-enter-to,
.menu-shadow-leave-from {
    opacity: 1;
}

.menu-content-enter-from,
.menu-content-leave-to {
    transform: translateX(300px);
}

.menu-content-enter-to,
.menu-content-leave-from {
    transform: translateX(0);
}
</style>
