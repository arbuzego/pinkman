<template>
  <div class="body">
    <div class="wrapper">
      <Carousel />
      <Accordion />
      <Form />
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Form from "../components/Form.vue";
import Accordion from "../components/Accordion.vue";
export default {
  components: {
    Carousel,
    Form,
    Accordion
  }
};
</script>

<style>
@font-face {
  font-family: "SM Sans";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("~assets/fonts/SBSansText-Regular.woff") format("truetype");
}
.body {
  background-color: black;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #eff6ff;
  height: 100%;
}
.wrapper {
  margin: 0 auto;
  max-width: 1320px;
  background: black;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container {
  padding: 50px;
}
</style>
