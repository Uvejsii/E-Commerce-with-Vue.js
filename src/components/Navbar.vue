<script setup>
import {RouterLink} from "vue-router";
import {computed, ref, defineEmits} from "vue";
import {useCartList, useFavoritesList} from "@/data/store.js";

const storeCart = useCartList()
const storeFavorites = useFavoritesList()

const {cartProducts} = defineProps(['cartProducts'])
const emits = defineEmits(['search', 'resetFilter'])

const burgerMenu = ref(false)
const search = ref('')
const toggleBurgerMenu = () => {
  burgerMenu.value = !burgerMenu.value
}

const totalProductsQuantity = computed(() => {
  return storeCart.items.reduce((acc, product) => acc + product.quantity, 0);
});

const searchProduct = () => {
  emits('search', search.value)
}

const resetFilter = () => {
  search.value = ''
  emits('resetFilter')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-danger fixed-top">
    <div class="container-fluid d-flex justify-content-between">
      <div>
        <RouterLink to="/"
        >
          <img
              src="/logo.png"
              alt="logo"
              class="img-fluid rounded-4 logo-image"
              @click="resetFilter"
          />
        </RouterLink>
      </div>
      <div class="w-50">
        <div class="d-flex" role="search">
          <input
              v-model="search"
              @keyup.enter="searchProduct"
              class="search-input form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
          />
          <button
              @click="searchProduct"
              class="search-btn btn bg-light text-danger">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div class="right-header">
        <ul class="navbar-nav d-flex align-items-center gap-4">
          <li class="nav-item text-light">
            <RouterLink
                to="/account"
                class="text-light pt-2 position-relative"
                active-class="active">
              <i class="bi bi-person fs-2"></i>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
                to="/favorites"
                class="text-light pt-2 position-relative"
                active-class="active"
            >
              <i class="bi-heart fs-2"></i>
              <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark shadow pt-1 fw-semibold">
                {{ storeFavorites.favoriteItems.length }}
              </span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
                to="/cart"
                class="text-light pt-2 position-relative"
                active-class="active">
              <i class="bi bi-bag fs-2"></i>
              <span
                  class="cart-quantity position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark shadow pt-1 fw-semibold"
              >
               {{ totalProductsQuantity }}
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div
          @click="toggleBurgerMenu"
          class="burger-menu d-none">
        <i
            v-if="burgerMenu"
            class="bi bi-x-lg text-light fs-2"></i>
        <i
            v-else
            class="bi bi-list text-light fs-2"></i>
      </div>
    </div>
  </nav>
  <div
      v-if="burgerMenu"
      class="menu-items bg-danger fixed-top end-0 d-flex justify-content-center ms-auto rounded-2">
    <ul class="list-inline">
      <li class=" text-light">
        <RouterLink
            to="/account"
            class="text-light pt-2 position-relative"
            active-class="active">
          <i class="bi bi-person fs-2"></i>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink
            to="/favorites"
            class="text-light pt-2 position-relative"
            active-class="active"
        >
          <i class="bi-heart fs-2"></i>
          <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark shadow pt-1 fw-semibold">
                {{ storeFavorites.favoriteItems.length }}
          </span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink
            to="/cart"
            class="text-light pt-2 position-relative"
            active-class="active">
          <i class="bi bi-bag fs-2"></i>
          <span
              class="cart-quantity position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark shadow pt-1 fw-semibold"
          >
               {{ totalProductsQuantity }}
              </span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo-image {
  width: 70px;
}

.search-btn:hover {
  color: white !important;
  background-color: #d9534f !important;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.6);
}

.active:before {
  content: '';
  position: absolute;
  top: 35px;
  width: 100%;
  height: 7%;
  background-color: white;
}

.username {
  padding-left: -30px !important;
}

@media (max-width: 995px) {
  .right-header {
    display: none;
  }

  .burger-menu {
    display: block !important;
    cursor: pointer;
  }

  .menu-items {
    margin-top: 64px !important;
    width: 50px;
  }

  .active:before {
    content: '';
    position: absolute;
    top: 35px;
    width: 30px;
    height: 2px;
    background-color: white;
  }
}

@media (max-width: 600px) {
  .active:before {
    content: '';
    position: absolute;
    top: 35px;
    width: 26px;
    height: 2px;
    background-color: white;
  }
}
</style>