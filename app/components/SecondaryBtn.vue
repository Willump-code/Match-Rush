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
    background-color: $back-color1;
    border: 3px solid $text-color1;
    color: $text-color1;
    border-radius: 1.2rem;
    transition: all 0.3s;

    &:hover {
        box-shadow: 0px 0 17px 0 rgba(0, 0, 0, 0.4);
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
