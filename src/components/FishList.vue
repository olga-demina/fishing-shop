<script setup lang="ts">
import type { Fish } from "@/models";
import { useGetImageUrl } from "../composables/getImageUrl";
const props = defineProps({
    fishes: {
        type: Array<Fish>,
    }
});

function drag(event: DragEvent, index: number) {
    event?.dataTransfer?.setData('fish', index.toString());
}

</script>

<template>
    <div class="fishes">
        <div v-for="(fish, index) in props.fishes" :index="index" class="fish-box">
            <img v-if="!fish.onScale" draggable="true" @dragstart="drag($event, index)"
                :src="useGetImageUrl(`${fish.name}.png`)" alt="">
        </div>
    </div>

</template>

<style lang="scss">
@use "../assets/scss/variables" as *;

.fishes {
    row-gap: 2rem;
    column-gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    .fish-box {
        background-color: $white-color;
        width: 10rem;
        height: 3.5rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 5rem;
        }
    }
}
</style>