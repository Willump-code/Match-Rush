<template>
    <button class="btn" :class="`${props.size}`">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    size: "S" | "M" | "L";
}>();
</script>

<style scoped lang="scss">
.btn {
    display: inline-block;
    background-color: $back-color3;
    color: $text-color2;
    border-radius: 1.2rem;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
    }
    &.S {
        font-size: clamp(0.85rem, 1.8vw, 1.1rem);
        padding: clamp(0.35rem, 1vw, 0.5rem) clamp(1.5rem, 3vw, 2.2rem);
    }

    &.M {
        font-size: clamp(1rem, 2vw, 1.4rem);
        padding: clamp(0.5rem, 1.3vw, 0.65rem) clamp(2.2rem, 5vw, 3.5rem);
    }

    &.L {
        font-size: clamp(1.3rem, 2.5vw, 1.8rem);
        padding: clamp(0.65rem, 1.6vw, 0.8rem) clamp(3rem, 7vw, 4.8rem);
    }
}
</style>
