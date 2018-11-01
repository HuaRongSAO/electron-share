import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  loading: false,
  bgImages: []
}
const getters = {
  loading: state => state.loading
}
const mutations = {
  SET_LOADING (state, loading) {
    state.loading = loading
  },
  SET_IMAGES (state, payload) {
    state.bgImages = payload
  }
}
const actions = {
  loading ({commit}) {
    commit('SET_LOADING', true)
  },
  close ({commit}) {
    commit('SET_LOADING', false)
  },
  async randomImg ({commit}, needImageNum) {
    const paramsRequest = {
      url: Vue.api.imageRandom,
      method: 'get',
      query: {format: 'js', idx: 0, n: 10}
    }
    const {data} = await Vue.http(paramsRequest)
    commit('SET_IMAGES', data)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
