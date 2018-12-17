import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/view/home/Home').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/view/about/About').default
    },
    {
      path: '/cheat',
      name: 'cheat',
      component: require('@/view/cheat/Cheat').default
    },
    {
      path: '/',
      name: 'search',
      component: require('@/view/search/Search').default
    },
    {
      path: '/index',
      name: 'index',
      component: require('@/view/index/Index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
