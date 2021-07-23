<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators position">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          v-if="windowWidth > 767"
          src="../static/images/Illustrations Large Card One.png"
          class="d-block w-100"
          alt="..."
        />
        <img
          v-else
          src="../static/images/Illustrations Small Card One.png"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel_body">
          <h5 class="carousel_title">Метка первого слайда</h5>
          <p class="carousel_text">
            Жидкость <span style="color:#00DB00">заряжает</span> электронный
            <span style="color:#eff6ff">гамма-квант</span>, при этом
            <span style="color:#eff6ff">дефект массы</span> не образуется
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          v-if="windowWidth > 767"
          src="../static/images/Illustrations Large Card Two.png"
          class="d-block w-100"
          alt="..."
        />
        <img
          v-else
          src="../static/images/Illustrations Small Card Two.png"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel_body">
          <h5 class="carousel_title">Метка второго слайда</h5>
          <p class="carousel_text">
            Жидкость <span style="color:#eff6ff">заряжает</span> электронный
            <span style="color:#00DB00">гамма-квант</span>, при этом
            <span style="color:#eff6ff">дефект массы</span> не образуется
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          v-if="windowWidth > 767"
          src="../static/images/Illustrations Large Card Three.png"
          class="d-block w-100"
          alt="..."
        />
        <img
          v-else
          src="../static/images/Illustrations Small Card Three.png"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel_body">
          <h5 class="carousel_title">Метка третьего слайда</h5>
          <p class="carousel_text">
            Жидкость <span style="color: #eff6ff">заряжает</span> электронный
            <span style="color:#eff6ff">гамма-квант</span>, при этом
            <span style="color:#00DB00">дефект массы</span> не образуется
          </p>
        </div>
      </div>
    </div>
    <button
      class="carousel_button"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    ></button>
    <button
      class="carousel_button carousel_button_right"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: null
    };
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("load", this.updateWindowWidth);
      window.addEventListener("resize", this.updateWindowWidth);
    }
  },
  destroy() {
    if (process.browser) {
      window.removeEventListener("resize", this.updateWindowWidth);
      window.removeEventListener("load", this.updateWindowWidth);
    }
  }
};
</script>

<style>
.position {
  margin: 0 0 28px 28px;
}
.carousel-indicators button {
  border: none !important;
  height: 8px !important;
  width: 8px !important;
  border-radius: 50%;
  background-color: #eff6ff !important;
  padding: 0 !important;
  margin: 0 8px 0 0 !important;
}
.carousel {
  border-radius: 40px;
  background-color: #1a1f21;
  margin-bottom: 200px;
}
.carousel-indicators {
  display: none;
}
.carousel_button {
  position: absolute;
  background-color: #1a1f21;
  background-image: url("../static/images/Round L arroy.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 50px;
  border: 1px solid white;
  border-radius: 50%;
  transform: rotate(180deg);
  left: 50px;
  bottom: 50px;
  transition: border-color 0.5s ease-in-out;
}
.carousel_button_right {
  left: 112px;
  transform: none;
}
.carousel_button:hover {
  border-color: #00db00;
}
.carousel_body {
  position: absolute;
  left: 50px;
  top: 50px;
}
.carousel_title {
  font-size: 17px;
  line-height: 100%;
  text-transform: uppercase;
  color: #00db00;
  margin-bottom: 40px;
}
.carousel_text {
  max-width: 600px;
  font-size: 46px;
  line-height: 105%;
  letter-spacing: -0.04em;
  color: #7a838d;
}
@media (max-width: 767px) {
  .carousel {
    border-radius: 24px;
    margin-bottom: 100px;
  }
  .carousel-indicators {
    display: block;
  }
  .carousel_button {
    display: none;
  }
  .carousel_body {
    left: 28px;
    top: 28px;
  }
  .carousel_title {
    font-size: 13px;
    line-height: 120%;
    margin-bottom: 28px;
  }
  .carousel_text {
    max-width: 240px;
    font-size: 27px;
    line-height: 120%;
    letter-spacing: -0.05em;
  }
}
</style>
