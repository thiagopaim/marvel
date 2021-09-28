const state = {
  favorites: [],
  isFavorite: false,
}

const getters = {
  isFavorite: (state) => state.isFavorite,
}

const actions = {
  handleFavorite({ commit }, hero) {
    commit('setIsLoading', false)

    Promise.resolve(JSON.parse(localStorage.getItem('favorites'))).then(
      (favorites) => {
        if (favorites) {
          const favoritesList = favorites
          const isFavorite = favorites.find((item) => item.id === hero.id)

          !isFavorite && favoritesList.push(hero)
          localStorage.setItem('favorites', JSON.stringify(favoritesList))
        } else {
          const favoritesList = []
          favoritesList.push(hero)
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
        favoritesList.splice(
          favorites.findIndex((item) => item.id === id),
          1
        )
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
          const isFavorite = favorites.find((item) => item.id === id)
          isFavorite && commit('setIsFavorite', true)
        }
      }
    )
  },
}

const mutations = {
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
