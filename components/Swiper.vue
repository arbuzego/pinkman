<template>
  <div class="carousel">
    <flickity ref="flickity" :options="flickityOptions">
      <div
        class="carousel-cell"
        v-for="slide of carouselData"
        :key="slide.largeImg"
      >
        <img
          v-show="largeImg"
          :src="require(`@/static/images/${slide.largeImg}`)"
          alt="..."
        />
        <img
          v-show="!largeImg"
          :src="require(`@/static/images/${slide.smallImg}`)"
          alt="..."
        />

        <div class="carousel_body">
          <h5 class="carousel_title">{{ slide.title }}</h5>
          <p class="carousel_text" v-html="slide.body"></p>
        </div>
      </div>
    </flickity>
    <button class="carousel_button" @click="previous"></button>
    <button
      class="carousel_button carousel_button_right"
      @click="next"
    ></button>
  </div>
</template>

<script>
import Flickity from "../node_modules/vue-flickity";
export default {
  components: {
    Flickity
  },
  data() {
    return {
      largeImg: true, //если не задать то ломается карусель, нужно получить значение до отрисовки карусели
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        freeScroll: false
        // autoPlay: true
      }
    };
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    updateWindowWidth() {
      this.largeImg = window.screen.width > 767 ? true : false;
      console.log(this.largeImg);
    }
  },
  props: {
    carouselData: Array
  },
  beforeCreate() {
    if (process.browser) {
      this.largeImg = window.screen.width > 767 ? true : false;
      console.log(this.largeImg);
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("resize", this.updateWindowWidth);
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener("resize", this.updateWindowWidth);
    }
  }
};
</script>

<style>
.flickity-page-dots {
  display: none;
  bottom: 28px;
  left: 28px;
  padding: 0;
  margin: 0;
  text-align: left;
  width: 48px;
}
.flickity-page-dots li {
  background-color: #eff6ff !important;
  height: 8px !important;
  width: 8px !important;
  padding: 0;
  margin: 0 8px 0 0 !important;
}
.carousel {
  border-radius: 40px;
  background-color: #1a1f21;
  margin-bottom: 200px;
  overflow: hidden;
  position: relative;
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
  .flickity-page-dots {
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
    max-width: 260px;
    font-size: 27px;
    line-height: 120%;
    letter-spacing: -0.05em;
  }
}
</style>
