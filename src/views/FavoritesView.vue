<script setup>
import {useFavoritesList} from "@/data/store.js";
import FavoriteProductCard from "@/components/FavoriteProductCard.vue";

const storeFavorites = useFavoritesList()

const removeAllFavorites = () => {
  storeFavorites.removeAllFavorites()
}
</script>

<template>
  <div class="container my-5">
    <div
        v-if="storeFavorites.favoriteItems.length > 0"
        class="row">
      <div class="col-12">
        <button
            @click="removeAllFavorites"
            class="btn btn-danger w-100 fw-semibold py-3 shadow">Remove all favorite products <i
            class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div
          v-if="storeFavorites.favoriteItems.length === 0"
          class="no-favorite-msg d-flex justify-content-center align-items-center col-xl-12 col-lg-12 col-md-12 col-xs-12 col-lg-10 col-md-12 col-xs-12 p-4 bg-danger-subtle bg-opacity-10 border border-danger rounded-5">
        <h1 class="text-danger text-center">No favorite products to be found here <i class="bi bi-search-heart"></i>
        </h1>
      </div>
      <FavoriteProductCard
          v-for="favoriteProduct in storeFavorites.favoriteItems"
          :key="favoriteProduct.id"
          :favoriteProduct="favoriteProduct"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 50px;
  min-height: 55vh;
}

.no-favorite-msg {
  height: 50vh;
}
</style>