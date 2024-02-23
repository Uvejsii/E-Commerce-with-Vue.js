<script setup>

</script>

<template>
  <div class="container-fluid bg-danger fw-semibold text-light">
    <footer
        class="d-flex flex-wrap justify-content-between text-sm-start py-3"
    >
      <div class="h-25">
        <p class="mb-sm-4 mb-md-0 text-light border-bottom m-0 copyright">
          &copy; 2024 E-Commerce
        </p>
      </div>
      <div
          class="fs-5 col-md-2 col-sm-3 justify-content-between d-flex flex-column h-25 mb-md-0 s-media"
      >
        <h6 class="text-uppercase fw-bold mb-3 border-bottom">Follow Us</h6>
        <div class="d-flex gap-3 justify-content-between">
          <a href="https://www.instagram.com/" target="_blank"
          ><i class="bi bi-instagram text-light"></i
          ></a>
          <a href="https://www.facebook.com/" target="_blank"
          ><i class="bi bi-facebook text-light"></i
          ></a>
          <a href="https://twitter.com/?lang=en" target="_blank"
          ><i class="bi bi-twitter-x text-light"></i
          ></a>
          <a href="https://www.linkedin.com/" target="_blank"
          ><i class="bi bi-linkedin text-light"></i
          ></a>
        </div>
      </div>
      <div class="col-md-4 col-lg-3 col-xl-3 contact">
        <h6 class="text-uppercase fw-bold mb-4 border-bottom">Contact</h6>
        <p>
          <i class="bi bi-geo-alt me-1 text-light"></i>
          Prishtine, Rr.Kamer Loshi, KS
        </p>
        <p>
          <i class="bi bi-envelope me-1 text-light"></i>
          e-shop@gmail.com
        </p>
        <p>
          <i class="bi bi-telephone me-1 text-light"></i>
          + 383 44 800 800
        </p>
        <p>
          <i class="bi bi-telephone me-1 text-light"></i>
          + 383 45 800 800
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@media (max-width: 700px) {
  footer {
    flex-direction: column;
    gap: 25px;
  }

  .copyright {
    width: fit-content;
  }

  .s-media {
    width: 200px;
  }

  .contact {
    width: fit-content;
  }
}
</style>