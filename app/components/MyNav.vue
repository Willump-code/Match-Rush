<template>
    <nav class="nav">
        <ul class="nav__list">
            <li 
            v-for="tab in tabs"
            :key="tab.idPage"
            class="nav__item"
            >
                <NuxtLink
                @click="hamburgerMenu.isOpen=false"
                class="nav__link"
                :to="tab.idPage"
                >
                {{ tab.nameTab }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    const hamburgerMenu = useHamburgerMenu()
    const tabs = useAppConfig().tabs
    const props = defineProps<{
        linkColor: '$text-color1' | '$text-color2';
        flexDirection: 'column' | 'row';
        alignItems: 'center' | 'start';
    }>()
</script>

<style scoped lang="scss">
    .nav{
        &__list{
            display: flex;
            align-items: center;
            gap: 20px;
            flex-direction: v-bind(flexDirection);
            align-items: v-bind(alignItems);;
        }
        &__link{
            font-size: 1.4rem;
            color: v-bind(linkColor);

            &.router-link-exact-active{
                text-decoration: underline;
            }
        }
    }
</style>