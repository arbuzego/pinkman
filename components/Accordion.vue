<template>
  <div class="accordion">
    <input type="checkbox" :id="accordionId" class="accordion_input" />
    <label :for="accordionId" class="accordion_title"
      >Фотон масштабирует межядерный поток?</label
    >
    <div class="accordion_text">
      <p>
        В соответствии с принципом неопределенности, гетерогенная структура
        трансформирует электронный взрыв.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    accordionId: Number
  }
};
</script>

<style>
.accordion {
  background: #202426;
  border-radius: 28px;
  transition: background 0.5s ease-in-out;
  margin-bottom: 8px;
}
.accordion_title {
  position: relative;
  display: block;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: -0.04em;
  color: #eff6ff;
  padding: 36px;
  cursor: pointer;
}
.accordion_title::after {
  content: "";
  display: block;
  position: absolute;
  opacity: 0.3;
  border: 1px solid rgba(239, 246, 255);
  box-sizing: border-box;
  background-image: url("../static/images/Round S arroy right.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  top: 32px;
  right: 32px;
  transition: all 0.5s ease-in;
}

.accordion:hover {
  background: #2f3234;
}

.accordion:hover .accordion_title::after {
  border-color: rgba(0, 219, 0);
  /* border-image: url("../static/images/border img hover.png") 10; */
}

.accordion_input {
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  width: 0;
  height: 0;
}

.accordion_input:checked ~ .accordion_title:after {
  transform: rotate(-90deg);
}
.accordion_input:checked ~ .accordion_title {
  padding-bottom: 0;
}
.accordion_input:checked ~ .accordion_text {
  display: block;
}

.accordion_text {
  padding: 12px 36px 36px 36px;
  max-width: 800px;
  display: none;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: -0.04em;
  color: #7a838d;
  animation-name: open;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0s;
}
@keyframes open {
  0% {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
  100% {
    display: block;
    opacity: 1;
    visibility: visible;
  }
}

@media (max-width: 767px) {
  .accordion {
    border-radius: 15px;
  }
  .accordion_title {
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    letter-spacing: -0.02em;
    padding: 24px 44px 24px 24px;
  }
  .accordion_title::after {
    height: 40px;
    width: 40px;
    top: 27px;
    right: 20px;
  }

  .accordion_text {
    font-weight: 400;
    padding: 16px 24px 24px 24px;
    font-size: 17px;
    line-height: 23px;
    letter-spacing: -0.02em;
  }
}
</style>
