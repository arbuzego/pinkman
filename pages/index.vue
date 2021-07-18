<template>
  <div class="body">
    <Navbar />
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
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Carousel,
    Form,
    Accordion,
    Navbar
  }
};
</script>

<style>
/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
/*--------------------*/

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
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container {
  padding: 50px;
}
@media (max-width: 767px) {
  .wrapper {
    max-width: 335px;
  }
  .container {
    padding: 35px 28px;
  }
}
</style>
