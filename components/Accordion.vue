<template>
  <div class="accordion">
    <div
      @click="showText = !showText"
      class="accordion_title"
      :class="{ active: showText }"
    >
      {{ accordionData.title }}
      <div
        class="accordion_text"
        ref="myText"
        :style="[showText ? { height: computedHeight, marginTop: '12px' } : {}]"
      >
        <p>
          {{ accordionData.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: false,
      computedHeight: 0
    };
  },
  props: {
    accordionData: Object
  },
  methods: {
    initHeight() {
      this.$refs["myText"].style.height = "auto";
      this.$refs["myText"].style.position = "absolute";
      this.$refs["myText"].style.visibility = "hidden";
      this.$refs["myText"].style.display = "block";

      const height = getComputedStyle(this.$refs["myText"]).height;
      this.computedHeight = height;

      this.$refs["myText"].style.position = null;
      this.$refs["myText"].style.visibility = null;
      this.$refs["myText"].style.display = null;
      this.$refs["myText"].style.height = 0;
    }
  },
  mounted() {
    this.initHeight();
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
.accordion_title.active::after {
  transform: rotate(-90deg);
}
.accordion:hover {
  background: #2f3234;
}

.accordion:hover .accordion_title::after {
  border-color: rgba(0, 219, 0);
}

.accordion_text {
  height: 0;
  overflow: hidden;
  transition: 1s;
  max-width: 800px;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: -0.04em;
  color: #7a838d;
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
