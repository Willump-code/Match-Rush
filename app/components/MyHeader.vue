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
                <MyNav 
                class="header__nav" 
                :link-color="'$text-color1'" 
                :flex-direction="'row'"
                :align-items="'center'"
                >
                </MyNav>
                <div @click="hamburgerMenu.isOpen = true" class="header__hamburger-btn">
                    <img src="@/assets/img/hamburger-btn.png" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    const hamburgerMenu = useHamburgerMenu()
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
        &__hamburger-btn{
            display: none;
            width: 48px;
            height: 48px;
        }
    }
    @media(max-width: 767px){
        .header__nav{
            display: none;
        }
        .header__hamburger-btn{
            display: block;
        }
    }
</style>