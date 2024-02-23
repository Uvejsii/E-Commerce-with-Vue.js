<script setup>
import ProductCard from "@/components/ProductCard.vue";

const {filteredProducts} = defineProps(['filteredProducts'])
</script>

<template>
  <div class="container my-5">
    <div class="row row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-md-2 g-4">
      <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 50px;
}
</style>