import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      users: []
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
    }
  });

export default store;
