<script setup>
const {product} = defineProps(['product'])
import {useCartList} from "@/data/store.js";

const cartStore = useCartList()

const increaseQuantity = () => {
  cartStore.increaseQuantity(product)
}

const decreaseQuantity = () => {
  cartStore.decreaseQuantity(product)
}
</script>

<template>
  <div class="added-product col-xl-6 col-lg-6 col-md-12 col-xs-12">
    <div class="row-cols-1 row-cols-2 g-4 d-flex justify-content-center">
      <div class="col-11 col-md-11 col-sm-12">
        <div class="card mb-4 shadow-lg border-danger">
          <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center justify-content-center rounded">
              <img
                  :src="product.image"
                  class="card-img img-fluid rounded-start"
                  alt=""
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-semibold">{{ product.name }}</h5>
                <p class="card-text fw-bold text-danger">
                  {{ (Math.round(product.priceCents) / 100).toFixed(2) }} &euro;
                </p>
                <p class="card-text fw-bold ">
                  Quantity:
                  <button
                      @click="decreaseQuantity"
                      class="counter-btns btn btn-danger fw-bold p-0 pb-1">
                    -
                  </button>
                  <span class="mx-2">{{ product.quantity }}</span>
                  <button
                      @click="increaseQuantity"
                      class="counter-btns btn btn-danger fw-bold p-0 pb-1">
                    +
                  </button>
                </p>
                <button
                    @click="$emit('deleteFromCart', product.id)"
                    class="btn btn-outline-danger delete-btn fw-semibold w-100 shadow">
                  Remove <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
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
  height: 200px;
  object-fit: contain;
}

.counter-btns {
  width: 25px;
}
</style>