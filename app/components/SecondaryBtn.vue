<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .btn{
        display: inline-block;
        background-color: $back-color1;
        border: 3px solid $text-color1;
        font-size: clamp(1.05rem, 2.5vw, 1.8rem);
        color: $text-color1;
        border-radius: 1.2rem;
        padding: clamp(0.65rem, 1.6vw, 0.8rem) clamp(3rem, 7vw, 4.8rem);
    }
</style>