<script setup lang="ts">
function drop(event: DragEvent) {
    console.log(event?.dataTransfer?.getData('fish'));
}
</script>

<template>
    <div class="scales" @dragover.prevent @drop.prevent="drop">
        <div class="platform">
            <div class="price">
                <span>+55</span> 
                <img src="../assets/img/coin.png" alt="Coin">
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
    }

    .base {
        img {
            height: 50px;
        }
    }
}

</style>