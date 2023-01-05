<script setup lang="ts">
import type { Fish } from "@/models";
import { computed } from "vue";
import { useGetImageUrl } from "../composables/getImageUrl";

const emit = defineEmits<{ (e: 'fishDrop', fishId: number | null): void }>();
const props = defineProps({
    scaledFishes: {
        type: Array<Fish>,
        default: []
    }
}
);

function drop(event: DragEvent) {
    emit("fishDrop", event?.dataTransfer?.getData('fish') ? parseInt(event.dataTransfer.getData('fish')) : null);
}

const price = computed(() => {
    if (props.scaledFishes.length > 0) {
        return props.scaledFishes.reduce((price: number, fish: any) => price + fish.size * fish.priceByKg, 0);
    } else {
        return 0;
    }
}
)
</script>

<template>
    <div class="scales" @dragover.prevent @drop.prevent="drop">
        <div class="platform">
            <div class="price">
                <span>+{{ price }}</span>
                <img src="../assets/img/coin.png" alt="Coin">
            </div>

            <div class="fishes">
                <img v-for="(fish, index) in props.scaledFishes" :index="index"
                    :src="useGetImageUrl(`${fish.name}.png`)" alt="">
            </div>
        </div>
        <div class="base">
            <img src="../assets/img/scale.png" alt="Scale image">
        </div>
    </div>
</template>

<style lang="scss">
@use "../assets/scss/variables" as *;

.scales {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .platform {
        width: 70%;
        height: 70%;
        border: 6px dashed $grey-dark-color;
        position: relative;

        .price {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: .3em 3em;
            background-color: $white-color;
            border-radius: 2rem;
            font-size: .8rem;
            font-weight: 600;

            img {
                width: 1rem;
                vertical-align: bottom;
            }
        }

        .fishes {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 1rem;
            padding: 2rem 1rem;

            img {
                width: calc(100% / 4 - 1rem);
            }
        }
    }

    .base {
        img {
            height: 50px;
        }
    }
}
</style>