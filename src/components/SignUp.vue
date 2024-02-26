<script setup>
import {ref, onMounted} from "vue"

const username = ref('')
const email = ref('')
const psw = ref('')
const usernameToDisplay = ref('')
const storedShowSignupForm = JSON.parse(localStorage.getItem('showSignupForm'));
const storedShowSignedupCard = JSON.parse(localStorage.getItem('showSignedupCard'));
const showSignupForm = ref(storedShowSignupForm !== null ? storedShowSignupForm : true);
const showSignedupCard = ref(storedShowSignedupCard !== null ? storedShowSignedupCard : false);

const handleSignup = () => {
  localStorage.setItem('account', JSON.stringify(username.value))
  localStorage.setItem('showSignupForm', JSON.stringify(false))
  localStorage.setItem('showSignedupCard', JSON.stringify(true))
  usernameToDisplay.value = JSON.parse(localStorage.getItem('account'))

  showSignedupCard.value = JSON.parse(localStorage.getItem('showSignedupCard'))
  showSignupForm.value = JSON.parse(localStorage.getItem('showSignupForm'))

  username.value = ''
  email.value = ''
  psw.value = ''
}

const useAnotherAccount = () => {
  localStorage.setItem('showSignupForm', JSON.stringify(true))
  localStorage.setItem('showSignedupCard', JSON.stringify(false))

  showSignupForm.value = JSON.parse(localStorage.getItem('showSignupForm'))
  showSignedupCard.value = JSON.parse(localStorage.getItem('showSignedupCard'))
}

onMounted(() => {
  usernameToDisplay.value = JSON.parse(localStorage.getItem('account')) || ''
});
</script>

<template>
  <section
      v-if="showSignupForm"
      class="background-radial-gradient overflow-hidden">
    <div class="container py-5 px-md-5 my-4">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-xl-5 col-lg-7 col-md-9 col-sm-9 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
          <div class="card bg-glass col-12">
            <h3 class="text-light text-center mt-4">Signup for free</h3>
            <div class="card-body px-4 pb-5 px-md-5">
              <form>
                <div class="form-outline text-light mb-4 fw-semibold">
                  <i class="bi bi-person-fill me-1"></i>
                  <label class="form-label" for="form3Example2">Username</label>
                  <input
                      v-model.trim="username"
                      type="text" id="form3Example2" class="form-control"/>
                </div>
                <div class="form-outline mb-4 text-light fw-semibold">
                  <i class="bi bi-envelope-at-fill me-1"></i>
                  <label class="form-label" for="form3Example3">Email address</label>
                  <input
                      v-model.trim="email"
                      type="email" id="form3Example3" class="form-control"/>
                </div>
                <div class="form-outline mb-4 text-light fw-semibold">
                  <i class="bi bi-lock-fill me-1"></i>
                  <label class="form-label" for="form3Example4">Password</label>
                  <input
                      v-model.trim="psw"
                      type="password" id="form3Example4" class="form-control"/>
                </div>
                <button
                    @click.prevent="handleSignup"
                    class="btn btn-danger w-100 fw-semibold">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
      v-if="showSignedupCard"
      class="background-radial-gradient overflow-hidden">
    <div class="container py-5 px-md-5 my-4">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-xl-5 col-lg-7 col-md-9 col-sm-9 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
          <div class="card signedup-card bg-glass">
            <div
                class="card-body py-4 text-light d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Hello {{ usernameToDisplay }}</h1>
              <h3>You have successfully signed up as {{ usernameToDisplay }}</h3>
              <i class="check-icon bi bi-check-circle-fill"></i>
            </div>
            <p
                @click="useAnotherAccount"
                class="another-acc text-primary text-decoration-underline fw-bold text-center">Signup with another
              account</p>
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

.signedup-card {
  height: 40vh;
}

.another-acc {
  cursor: pointer;
}

.check-icon {
  font-size: 50px;
}
</style>