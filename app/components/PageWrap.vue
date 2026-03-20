<template>
    <AnimationMountedWrap :time-after-mounted="0">
        <div class="wrap">
            <slot></slot>
        </div>
    </AnimationMountedWrap>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .wrap{
        margin: 100px 0;
    }
</style>