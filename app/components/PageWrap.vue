<template>
    <Transition name="wrap">
        <div class="wrap" v-if="wrapLoaded">
            <slot></slot>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    const wrapLoaded = ref<boolean>(false);
    onMounted(()=>{
        wrapLoaded.value = true
    })
</script>

<style scoped lang="scss">
    .wrap{
        margin: 100px 0;
    }

    .wrap-enter-active, .wrap-leave-active{
        transition: all 0.5s;
    }
    .wrap-enter-from, .wrap-leave-to{
        opacity: 0;
        transform: translateY(500px);
    }
    .wrap-enter-to, .wrap-leave-from{
        opacity: 1;
        transform: translateY(0);
    }
</style>