<script setup>
const {
  products,
  totalProductsQuantity,
  productsTotal,
  totalWithShipping,
  tax,
  orderTotal,
} = defineProps(['products', 'totalProductsQuantity', 'productsTotal', 'totalWithShipping', 'tax', 'orderTotal'])
</script>

<template>
  <section class="col-lg-4 col-md-12 order-lg-2 order-1">
    <div
        class="payment-summary card shadow-lg mb-3 fw-semibold border-danger"
    >
      <div class="card-header text-light bg-danger">
        Order details
      </div>
      <div class="card-body">
        <div class="card-text">
          <div class="d-flex justify-content-between">
            <p>Products (<span class="text-danger">{{ totalProductsQuantity }}</span>):</p>
            <p>{{ productsTotal }} &euro;</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>Shipping:</p>
            <p v-if="products.length === 0"> 0 &euro;</p>
            <p v-else>5 &euro;</p>
          </div>
          <div class="d-flex justify-content-between border-danger border-top">
            <p>Total without TAX:</p>
            <p v-if="products.length === 0">{{ totalWithShipping = 0 }} &euro;</p>
            <p v-else>{{ totalWithShipping }} &euro;</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>TAX (8%):</p>
            <p v-if="products.length === 0">{{ tax = 0 }} &euro;</p>
            <p v-else>{{ tax }} &euro;</p>
          </div>
        </div>
      </div>
      <div class="card-footer border-top border-5 border-danger">
        <div class="d-flex justify-content-between text-danger">
          <h5 class="fw-semibold">Order Total</h5>
          <h5 v-if="products.length === 0">{{ orderTotal = 0 }} &euro;</h5>
          <h5 v-else class="fw-semibold">{{ orderTotal }} &euro;</h5>
        </div>
        <button class="btn btn-danger w-100 fs-5 fw-semibold my-3">
          Order Now
        </button>
      </div>
    </div>
  </section>
</template>