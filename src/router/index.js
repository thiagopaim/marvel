import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  store.dispatch('checkIsUserLogged')
  store.commit('setIsLoading', false)
  store.commit('setCurrentPage', 1)
  store.commit('setOffsetPage', 0)
  store.commit('setTotalPages', 1)

  if (to.matched.some((record) => record.meta.login)) {
    if (!localStorage['token']) next('/')
    else next()
  } else {
    next()
  }
})

export default router
