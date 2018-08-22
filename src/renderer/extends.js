import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import http from './http'
import api from './api'

Vue.http = http
Vue.prototype.$http = http
Vue.api = api
Vue.prototype.$api = api

Vue.use(iView)
