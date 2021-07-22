import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      // users: JSON.parse(localStorage.getItem("users") || "[]")
      users: []
    },
    mutations: {
      updateUsers(state, user) {
        state.users.push(user);
        // if (process.browser) {
        //   localStorage.setItem("users", JSON.stringify(state.users));
        // }
      }
    },
    actions: {
      updateUsers({ commit }, user) {
        commit("updateUsers", user);
      }
    }
  });

export default store;
