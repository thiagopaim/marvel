import { api } from '@/services'
import router from '@/router'

const state = {
  user: {},
  isLogged: false,
  favorites: [],
  isFavorite: false,
}

const getters = {
  user: (state) => state.user,
  isLogged: (state) => state.isLogged,
  isFavorite: (state) => state.isFavorite,
}

const actions = {
  async loginUser({ commit }, payload) {
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
  },

  cheskUserLogged({ commit }) {
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

  handleFavorite({ commit }, id) {
    Promise.resolve(JSON.parse(localStorage.getItem('favorites'))).then(
      (favorites) => {
        if (favorites) {
          const favoritesList = favorites
          const isFavorite = favorites.find((item) => item === id)

          !isFavorite && favoritesList.push(id)
          localStorage.setItem('favorites', JSON.stringify(favoritesList))
        } else {
          const favoritesList = []
          favoritesList.push(id)
          localStorage.setItem('favorites', JSON.stringify(favoritesList))
        }

        commit('setIsFavorite', true)
      }
    )
  },

  handleUnfavorite({ commit }, id) {
    Promise.resolve(JSON.parse(localStorage.getItem('favorites'))).then(
      (favorites) => {
        const favoritesList = favorites
        const index = favoritesList.indexOf(id)
        index > -1 && favoritesList.splice(index, 1)
        localStorage.setItem('favorites', JSON.stringify(favoritesList))

        commit('setIsFavorite', false)
      }
    )
  },

  checkFavorite({ commit }, id) {
    commit('setIsFavorite', false)

    Promise.resolve(JSON.parse(localStorage.getItem('favorites'))).then(
      (favorites) => {
        if (favorites) {
          const isFavorite = favorites.find((item) => item === id)
          isFavorite && commit('setIsFavorite', true)
        }
      }
    )
  },

  logoutUser() {
    localStorage.removeItem('token')
  },
}

const mutations = {
  setUser: (state, data) => {
    state.user = data
  },

  setIsLogged: (state, status) => {
    state.isLogged = status
  },

  setIsFavorite: (state, hero) => {
    state.isFavorite = hero
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
