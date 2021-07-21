import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      windowWidth: null,
      country: "",
      errorsList: [],
      fullName: "",
      email: ""
    },
    mutations: {
      updateWindowWidth(state, Width) {
        state.windowWidth = Width;
      },
      updateCountry(state, Country) {
        state.country = Country;
      },
      removeCountry(state) {
        state.country = "";
      },
      updateFullName(state, FullName) {
        state.fullName = FullName;
      },
      removeFullName(state) {
        state.fullName = "";
      },
      updateEmail(state, Email) {
        state.email = Email;
      },
      removeEmail(state) {
        state.email = "";
      },
      updateErrorsList(state, Errors) {
        state.errorsList.push(Errors);
      },
      removeErrorsList(state) {
        state.errorsList = [];
      }
    },
    getters: {
      windowWidth: state => {
        return state.windowWidth;
      },
      country: state => {
        return state.country;
      },
      fullName: state => {
        return state.fullName;
      },
      errorsList: state => {
        return state.errorsList;
      },
      email: state => {
        return state.email;
      }
    }
  });

export default store;
