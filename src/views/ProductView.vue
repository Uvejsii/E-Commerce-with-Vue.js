<script setup>
import {useRoute} from "vue-router";
import products from '@/data/products.json'
import {ref} from "vue";
import {useCartList, useFavoritesList} from "@/data/store.js";

const route = useRoute()
const product = products.find(p => p.id === route.params.id)
const storeCart = useCartList()
const storeFavorites = useFavoritesList()
const addedToCartMsg = ref(false)
const addedToFavsMsg = ref(false)


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
  <div class="container my-5">
    <div class="row">
      <div class="col-12">
        <div class="card border-danger border-2">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="product.image" class="card-img img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body p-xl-5 p-sm-4">
                <h1 class="card-title text-danger">{{ product.name }}</h1>
                <h5 class="card-text my-4">This is the <span class="fw-bold text-primary-emphasis">{{
                    product.name
                  }}</span>
                  product, the number of people that rated it is <span
                      class="fw-bold text-primary-emphasis">{{ product.rating.count }}.</span>
                  It is rated <span class="fw-bold text-warning-emphasis">{{ product.rating.stars }} / 5</span> from the
                  people that purchased it.
                </h5>
                <h3 class="card-text">Price: <span class="fw-bold text-warning-emphasis">{{
                    (Math.round(product.priceCents) / 100).toFixed(2)
                  }}&euro;</span></h3>
                <div class="d-flex gap-2 justify-content-between mt-5 position-relative">
                  <div
                      v-if="addedToCartMsg"
                      class="position-absolute bottom-50">
                    <p class="text-success fw-semibold fs-4">Added <i class="bi bi-bag-check"></i></p>
                  </div>
                  <button
                      @click="addToCart"
                      class="btn btn-danger w-50 mt-3 fw-semibold fs-5">
                    Add to<i class="bi bi-bag ms-2"></i>
                  </button>
                  <div
                      v-if="addedToFavsMsg"
                      class="position-absolute bottom-50 start-50 translate-middle-x ps-5">
                    <p class="text-success fw-semibold fs-4 ms-5 ps-3 d-flex gap-1">Added <i
                        class="bi bi-heart-fill"></i></p>
                  </div>
                  <button
                      @click="addToFavorites"
                      class="btn btn-outline-danger w-50 mt-3 p-1 shadow fs-5">
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 60px;
}

.card-img {
  height: 400px;
  object-fit: contain;
}
</style>