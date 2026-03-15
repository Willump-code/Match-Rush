<template>
    <nav class="nav">
        <ul class="nav__list">
            <li 
            v-for="tab in tabs"
            :key="tab.idPage"
            class="nav__item"
            >
                <NuxtLink
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
    const tabs = useAppConfig().tabs
</script>

<style scoped lang="scss">
    .nav{
        &__list{
            display: flex;
            align-items: center;
            gap: 20px;
        }
        &__link{
            font-size: 1.4rem;


            &.router-link-exact-active{
                text-decoration: underline;
            }
        }
    }
</style>