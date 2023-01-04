<script setup lang="ts">
import Scale from "./components/Scale.vue";
import FishList from "./components/FishList.vue";
import fishes from "./assets/fish.js";


</script>

<template>
  <div class="wrapper">
    <div class="shop-container">
      <div class="shop-top">
        <div class="shop-sign">
          <img src="./assets/img/store-curtains.png" alt="">
          <div class="shop-sign-text">
            <h2>This & That</h2>
            <h4>purchase</h4>
            <p>[since 1975]</p>
          </div>
        </div>
        <div class="shop-scales">
          <Scale />
        </div>
      </div>
      <div class="shop-bottom">
        <FishList :fishes="fishes" />
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use "./assets/scss/app.scss";
@use "./assets/scss/variables" as *;

.wrapper {
  width: 100%;
  height: 100vh;
  background-color: $bg-light-color;
  display: flex;
  justify-content: center;
  align-items: center;

  .shop-container {
    width: 80%;
    height: 80%;
    background-color: $bg-dark-color;
    border-radius: 1rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
    overflow: hidden;
    display: grid;
    grid-template: 60% 40% / auto;

    .shop-top {
      display: grid;
      grid-template-columns: 1fr 2fr;

      .shop-sign {
        position: relative;
        overflow-x: hidden;
        background-color: $bg-shop-color;

        img {
          min-width: 500px;
          width: 150%;
          position: absolute;
          left: -20%;
          top: -4rem;
        }

        .shop-sign-text {
          color: $grey-color;
          text-align: center;
          margin-top: 10rem;

          h2 {
            font-size: 2rem;
          }

          h4,
          p {
            text-transform: uppercase;
          }
        }
      }

      .shop-scales {
        background-color: $grey-color;
      }
    }

    .shop-bottom {
      padding: 0 4rem;
      display: flex;
      align-items: center;
    }
  }
}
</style>
