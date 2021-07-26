<template>
  <div class="accordion_list">
    <div class="accordion_list_title">Вопросы и ответы</div>
    <div v-for="elem in accordionsData" :key="elem.id">
      <Accordion :accordionData="elem" />
    </div>
  </div>
</template>

<script>
import Accordion from "./Accordion.vue";
export default {
  props: {
    accordionsData: Array
  },
  components: {
    Accordion
  }
};
</script>

<style>
.accordion_list {
  margin-bottom: 150px;
}
.accordion_list_title {
  font-size: 17px;
  text-transform: uppercase;
  color: #00db00;
  margin-bottom: 50px;
}

@media (max-width: 767px) {
  .accordion_list {
    margin-bottom: 100px;
  }
  .accordion_list_title {
    line-height: 120%;
    margin-bottom: 28px;
  }
}
</style>
