import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      windowWidth: null
      // errors: [],
      // fullName: "",
      // email: ""
    },
    mutations: {
      updateWindowWidth(state, width) {
        state.windowWidth = width;
      }
    },
    getters: {
      windowWidth: state => {
        return state.windowWidth;
      }
      // errors: state => {
      //   return state.errors;
      // },
      // fullName: state => {
      //   return state.fullName;
      // },
      // email: state => {
      //   return state.email;
      // }
    }
  });

export default store;
