<template>
  <div class="body">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "newLayouts",
  components: {
    Navbar
  }
};
</script>

<style>
.body {
  background-color: black;
  font-family: "SB Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #eff6ff;
  height: 100%;
}
</style>
