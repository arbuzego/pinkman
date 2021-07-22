import Vue from "vue";
import Vuex from "vuex";
import data from "../static/data.json";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      // users: JSON.parse(data.users || "[]")
      users: []
    },
    mutations: {
      updateUsers(state, user) {
        state.users.push(user);
        // data.users.push(JSON.stringify(user));
      }
    },
    actions: {
      updateUsers({ commit }, user) {
        commit("updateUsers", user);
      }
    }
  });

export default store;
