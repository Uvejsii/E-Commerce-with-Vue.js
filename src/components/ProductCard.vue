<script setup>
import {useCartList, useFavoritesList} from "@/data/store.js";
import {ref} from "vue";

const storeCart = useCartList()
const storeFavorites = useFavoritesList()
const addedToCartMsg = ref(false)
const addedToFavsMsg = ref(false)

const {
  product,
} = defineProps(['product'])

const addToCart = () => {
  storeCart.addToCart(product)

  addedToCartMsg.value = true

  setTimeout(() => {
    return addedToCartMsg.value = false
  }, 1000)
}

const addToFavorites = () => {
  storeFavorites.addToFavorites(product)

  addedToFavsMsg.value = true

  setTimeout(() => {
    return addedToFavsMsg.value = false
  }, 1000)
}
</script>

<template>
  <div class="col">
    <div class="card shadow-lg rounded-4">
      <RouterLink
          :to="`/product/${product.id}`">
        <img :src="product.image" class="card-img-top img-fluid" alt=""/>
      </RouterLink>
      <div class="card-body">
        <div class="rating d-flex justify-content-between align-items-center mb-2">
          <img :src="`/ratings/rating-${product.rating.stars * 10}.png`" alt="">
          <span class="text-primary fw-semibold">{{ product.rating.count }}</span>
        </div>
        <RouterLink
            :to="`/product/${product.id}`"
            class="text-decoration-none">
          <h5 class="card-title text-dark-emphasis">{{ product.name }}</h5>
        </RouterLink>
        <h5 class="card-text">{{ (Math.round(product.priceCents) / 100).toFixed(2) }} &euro;</h5>
        <div class="d-flex gap-1 justify-content-between position-relative mt-3">
          <div
              v-if="addedToCartMsg"
              class="position-absolute bottom-50">
            <p class="text-success fw-semibold">Added <i class="bi bi-bag-check"></i></p>
          </div>
          <button
              @click="addToCart"
              class="btn btn-danger w-75 mt-3 fw-semibold">
            Add to<i class="bi bi-bag ms-2"></i>
          </button>
          <div
              v-if="addedToFavsMsg"
              class="position-absolute bottom-50 end-0">
            <p class="text-success fw-semibold">Added <i class="bi bi-heart-fill"></i></p>
          </div>
          <button
              @click="addToFavorites"
              class="btn btn-outline-danger w-25 mt-3 p-1 shadow"><i class="bi bi-heart"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: contain;
  transition: all 0.3s;
}

.card-img-top:hover {
  scale: .9;
}

.rating img {
  width: 120px;
}

.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>