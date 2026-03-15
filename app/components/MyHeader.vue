<template>
    <header class="header">
        <div class="container">
            <div class="header__wrap">
                <NuxtLink to="/" class="header__logo">
                    <div class="header__logo-wrap">
                        <img src="@/assets/img/header-logo.png" alt="logo">
                        <span>MatchRush</span>
                    </div>
                </NuxtLink>
                <MyNav></MyNav>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .header{
        background-color: $back-color2;
        padding: 5px 0;

        &__wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__logo{
            &-wrap{
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 2px;


                & img{
                    max-width: 64px;
                }
                & span{
                    font-size: 1.5rem;
                    font-weight: 700;
                }
            }
        }
    }
</style>