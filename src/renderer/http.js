import axios from 'axios'
import Vue from 'vue'

axios.defaults.timeout = 5000
const http = axios.create({timeout: 5000})

// 请求 拦截器
http.interceptors.request.use(
  config => {
    const {path, url} = config
    config.url = url.replace(/\:([a-zA-Z0-9]{1,})(\/|\b$)/mg,
      (...argus) => (`${path[argus[1]]}${argus[2]}`))
    return config
  },
  err => {
    return Promise.reject(err)
  })
// 响应 拦截器
http.interceptors.response.use(
  response => {
    Vue.close()
    return response
  },
  err => {
    const {status} = err.response
    Vue.close()
    if (status === 401) {
      Vue.prototype.$Message.error('对不起,您没有权限访问！')
      Vue.prototype.$router.push('/')
    }
    if (status === 500) {
      Vue.prototype.$Message.error('系统错误,请联系管理员！')
    }
    return Promise.reject(err)
  })

export default http
