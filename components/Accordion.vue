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
  padding: 0 36px 36px 36px;
  display: none;
  max-width: 750px;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: -0.04em;
  color: #7a838d;
  transition: display 0.5s ease-in-out;
}

@media (max-width: 767px) {
  .accordion {
    border-radius: 15px;
  }
  .accordion_title {
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
    padding: 0 24px 24px 24px;
    font-size: 17px;
    line-height: 23px;
    letter-spacing: -0.02em;
  }
}
</style>
