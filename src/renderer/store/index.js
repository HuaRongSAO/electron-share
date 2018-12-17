import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  loading: false,
  user: 'HuaRongSAO',
  bgImages: [],
  github: {}
}
const getters = {
  loading: state => state.loading,
  user: state => state.user,
  github: state => state.github
}
const mutations = {
  SET_LOADING (state, loading) {
    state.loading = loading
  },
  SET_IMAGES (state, payload) {
    state.bgImages = payload
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_GITHUB (state, github) {
    state.github = github
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
  },
  changeUser ({commit}, user) {
    commit('SET_USER', user)
  },
  async getGithubInfo ({commit, state}) {
    const {user} = state
    const httpParams = {
      url: Vue.api.users,
      path: {user},
      method: 'get'
    }
    const {data} = await Vue.http(httpParams)
    commit('SET_GITHUB', data)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
