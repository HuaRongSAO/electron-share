import Vue from 'vue'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import http from './http'
import api from './api'

Vue.http = http
Vue.prototype.$http = http
Vue.api = api
Vue.prototype.$api = api
Vue.loading = () => store.dispatch('loading')
Vue.prototype.$loading = () => Vue.loading()
Vue.close = () => store.dispatch('close')
Vue.prototype.$close = () => Vue.close()

Vue.use(iView)
