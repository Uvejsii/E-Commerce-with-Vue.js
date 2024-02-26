<script setup>
import {RouterView} from 'vue-router'
import {ref} from "vue";
import p from '@/data/products.json'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const allProducts = ref(p);
const filteredProducts = ref(allProducts.value)

const cartProducts = ref(JSON.parse(localStorage.getItem('product')))
if (!cartProducts.value) {
  localStorage.setItem('product', '[]')
}

const favoriteProduct = ref(JSON.parse(localStorage.getItem('favoriteProducts')))
if (!favoriteProduct.value) {
  localStorage.setItem('favoriteProducts', '[]')
}

const account = ref(JSON.parse(localStorage.getItem('account')))
if (!account.value) {
  localStorage.setItem('account', '[]')
}
const handleSearch = (searchValue) => {
  if (!searchValue.trim) {
    filteredProducts.value = allProducts.value
  } else {
    filteredProducts.value = allProducts.value.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
  }
}

const handleResetFilter = () => {
  filteredProducts.value = allProducts.value
}
</script>

<template>
  <Navbar
      @search="handleSearch"
      @resetFilter="handleResetFilter"/>
  <RouterView :filteredProducts="filteredProducts"/>
  <Footer/>
</template>