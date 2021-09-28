import { api } from '@/services'
import router from '@/router'

const state = {
  user: {},
  isLogged: false,
}

const getters = {
  user: (state) => state.user,
  isLogged: (state) => state.isLogged,
}

const actions = {
  async loginUser({ commit, dispatch }, payload) {
    commit('setIsLoading', true)

    await api
      .login(payload)
      .then(({ data }) => {
        const { token } = data
        localStorage.setItem('token', token)
      })
      .then(() => {
        commit('setUser', { name: 'Steve Ditko', email: 'ditkol@marvel.com' })
      })
      .then(() => {
        commit('setIsLogged', true)
      })
      .then(() => commit('setIsLoading', false))
      .then(() => router.push('/'))
      .catch(() => {
        dispatch('showErrorMessage', 'Usuário ou senha inválidos')
      })
      .finally(() => commit('setIsLoading', false))
  },

  checkIsUserLogged({ commit }) {
    Promise.resolve(localStorage.getItem('token')).then((token) => {
      if (token) {
        commit('setIsLogged', true)
        commit('setUser', { name: 'Steve Ditko', email: 'ditkol@marvel.com' })
      } else {
        commit('setIsLogged', false)
        commit('setUser', {})
      }
    })
  },

  logoutUser() {
    localStorage.removeItem('token')
    router.push('/')
  },
}

const mutations = {
  setUser: (state, data) => {
    state.user = data
  },

  setIsLogged: (state, status) => {
    state.isLogged = status
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
