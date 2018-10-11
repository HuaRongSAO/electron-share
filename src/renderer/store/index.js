import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  loading: false
}
const getters = {
  loading: state => state.loading
}
const mutations = {
  SET_LOADING (state, loading) {
    state.loading = loading
  }
}
const actions = {
  loading ({commit}) {
    commit('SET_LOADING', true)
  },
  close ({commit}) {
    commit('SET_LOADING', false)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})