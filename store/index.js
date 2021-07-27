import Vue from "vue";
import Vuex from "vuex";
import data from "../static/data.json";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      users: [], //данные вводимые в форму
      navBarData: data.NavBarData
    },
    mutations: {
      updateUsers(state, user) {
        state.users.push(user);
      }
    },
    actions: {
      updateUsers({ commit }, user) {
        commit("updateUsers", user);
      }
    },
    getters: {
      navBarData: state => state.navBarData
    }
  });

export default store;
