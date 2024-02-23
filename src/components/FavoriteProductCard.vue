<script setup>
import {useCartList, useFavoritesList} from "@/data/store.js";
import {ref} from "vue";

const storeFavorites = useFavoritesList()
const storeCart = useCartList()
const addedToCartMsg = ref(false)
const {favoriteProduct} = defineProps(['favoriteProduct'])

const removeFromFavorites = (pId) => {
  storeFavorites.removeFromFavorites(pId)
}

const addToCart = () => {
  storeCart.addToCart(favoriteProduct)

  addedToCartMsg.value = true

  setTimeout(() => {
    return addedToCartMsg.value = false
  }, 1000)
}
</script>

<template>
  <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-2">
    <div class="card mb-3 shadow border border-danger">
      <div class="row g-0">
        <div class="col-xl-4 img-container">
          <img :src="favoriteProduct.image" class="card-img img-fluid rounded-start" alt="...">
        </div>
        <div class="col-xl-8 p-3">
          <div class="card-body p-0">
            <h5 class="card-title text-danger">{{ favoriteProduct.name }}</h5>
            <h6 class="card-text my-4">This product is rated from
              <span class="fw-bold text-primary-emphasis">{{ favoriteProduct.rating.count }}
                  </span> buyers, and has a <span class="fw-bold text-warning-emphasis">{{
                  favoriteProduct.rating.stars
                }} / 5</span> average stars from the
              people that purchased it.
            </h6>
            <h4 class="card-text">Price: <span class="fw-bold text-warning-emphasis">{{
                (Math.round(favoriteProduct.priceCents) / 100).toFixed(2)
              }} &euro;</span>
            </h4>
            <p class="text-primary-emphasis fw-semibold">Times added to favorites: {{ favoriteProduct.timesAdded }}</p>
          </div>
          <div class="card-bottom mt-4 d-flex gap-2 justify-content-between">
            <div
                v-if="addedToCartMsg"
                class="position-absolute bottom-0 mb-4 pb-3">
              <p class="text-success fw-semibold fs-5">Added <i class="bi bi-bag-check"></i></p>
            </div>
            <button
                @click="addToCart"
                class="btn btn-danger w-75 mt-4 fw-semibold">
              Add to<i class="bi bi-bag ms-2"></i>
            </button>
            <button
                @click="removeFromFavorites(favoriteProduct.id)"
                class="btn btn-outline-danger w-25 mt-4 p-1 shadow"><i class="bi bi-trash3"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

img {
  height: 230px;
  object-fit: contain;
}
</style>