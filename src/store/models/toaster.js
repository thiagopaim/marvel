const state = {
  toasterOpen: false,
  toasterMessage: '',
  toasterColor: '',
}

const getters = {
  isToasterOpen: (state) => state.toasterOpen,
  toasterMessage: (state) => state.toasterMessage,
  toasterColor: (state) => state.toasterColor,
}

const actions = {
  showErrorMessage({ commit, dispatch }, message) {
    commit('setIsToasterOpen', true)
    commit('setToasterMessage', message)
    commit('setToasterColor', 'bg-red-700')

    setTimeout(() => {
      dispatch('hideToaster')
    }, 6000)
  },

  showSuccessMessage({ commit, dispatch }, message) {
    commit('setIsToasterOpen', true)
    commit('setToasterMessage', message)
    commit('setToasterColor', 'bg-green-700')

    setTimeout(() => {
      dispatch('hideToaster')
    }, 6000)
  },

  hideToaster({ commit }) {
    commit('setIsToasterOpen', false)
    setTimeout(() => {
      commit('setToasterMessage', '')
      commit('setToasterColor', '')
    }, 500)
  },
}

const mutations = {
  setIsToasterOpen: (state, status) => {
    state.toasterOpen = status
  },

  setToasterMessage: (state, message) => {
    state.toasterMessage = message
  },

  setToasterColor: (state, color) => {
    state.toasterColor = color
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
