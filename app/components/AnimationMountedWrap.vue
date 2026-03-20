<template>
    <Transition name="wrap">
        <div v-if="wrapLoaded" class="wrap">
            <slot></slot>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    const props = defineProps<{
        timeAfterMounted: number
    }>()
    const wrapLoaded = ref<boolean>(false)
    onMounted(()=>{
        setTimeout(()=>{
            wrapLoaded.value=true
        }, props.timeAfterMounted)
        
    })
</script>

<style scoped lang="scss">
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