import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {
      jwt : null,
      avatar : null,
      isAuth : false,
      userName : null,
      group : "guest"
    }
  },
  mutations: {
    setUser(state, data){
      state.user.jwt = data.jwt
      state.user.userName = data.username
      state.user.isAuth = true
      state.user.group = data.group
    },
    logout(state){
      state.user.jwt = null,
      state.user.avatar = null,
      state.user.isAuth = false,
      state.user.userName = null,
      state.user.group = "guest"
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
