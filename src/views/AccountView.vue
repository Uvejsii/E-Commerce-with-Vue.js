<script setup>

</script>

<template>
  <section class="background-radial-gradient overflow-hidden">
    <div class="container d-flex justify-content-center py-5 px-md-5 text-center text-lg-start my-4">
      <div class="row align-items-center">
        <div class="col-lg-12 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
          <div class="card bg-glass">
            <h3 class="text-light text-center mt-4">Signup for free</h3>
            <div class="card-body px-4 pb-5 px-md-5">
              <form>
                <div class="row text-light fw-semibold">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <i class="bi bi-person-lines-fill me-1"></i>
                      <label class="form-label" for="form3Example1">First name</label>
                      <input type="text" id="form3Example1" class="form-control"/>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <i class="bi bi-person-fill me-1"></i>
                      <label class="form-label" for="form3Example2">Last name</label>
                      <input type="text" id="form3Example2" class="form-control"/>
                    </div>
                  </div>
                </div>
                <div class="form-outline mb-4 text-light fw-semibold">
                  <i class="bi bi-envelope-at-fill me-1"></i>
                  <label class="form-label" for="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" class="form-control"/>
                </div>
                <div class="form-outline mb-4 text-light fw-semibold">
                  <i class="bi bi-lock-fill me-1"></i>
                  <label class="form-label" for="form3Example4">Password</label>
                  <input type="password" id="form3Example4" class="form-control"/>
                </div>
                <button type="submit" class="btn btn-danger w-100">
                  Login
                </button>
                <p class="p-0 m-0 mt-1 text-light">
                  Already have an account? <span class="text-primary fw-semibold">Login now</span>
                </p>
              </form>
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