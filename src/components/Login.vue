<script setup>
import {ref} from "vue";

const usernameToDisplay = ref('')


usernameToDisplay.value = JSON.parse(localStorage.getItem('account')) || '';
</script>

<template>
  <section class="background-radial-gradient overflow-hidden">
    <div class="container py-5 px-md-5 my-4">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-xl-5 col-lg-7 col-md-9 col-sm-9 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
          <div class="card bg-glass">
            <div class="card-body py-4 text-light text-center">
              <h1>Hello {{ usernameToDisplay }}</h1>
              <h3>You have successfully signed up as {{ usernameToDisplay }}</h3>
              <i class="bi bi-check-circle-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-top: 80px;
}

.background-radial-gradient {
  background-color: hsl(0, 41%, 15%);
  background-image: radial-gradient(650px circle at 0% 0%,
  hsl(0, 41%, 35%) 15%, hsl(0, 41%, 30%) 35%, hsl(0, 41%, 20%) 75%, hsl(0, 41%, 19%) 80%,
  transparent 100%),
  radial-gradient(1250px circle at 100% 100%,
      hsl(0, 41%, 45%) 15%, hsl(0, 41%, 30%) 35%, hsl(0, 41%, 20%) 75%, hsl(0, 41%, 19%) 80%,
      transparent 100%);
}

#radius-shape-1 {
  height: 220px;
  width: 220px;
  top: -60px;
  left: -130px;
  background: radial-gradient(#ff0000, #ff4d4d);
  overflow: hidden;
}

#radius-shape-2 {
  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
  bottom: -60px;
  right: -110px;
  width: 300px;
  height: 300px;
  background: radial-gradient(#ff0000, #ff4d4d);
  overflow: hidden;
}

.bg-glass {
  background-color: hsla(360, 94%, 45%, 0.30) !important;
  backdrop-filter: saturate(100%) blur(10px);
}
</style>