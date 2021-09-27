const state = {
  loading: false,
  componentLoading: false,
}

const getters = {
  isLoading: (state) => state.loading,
  isComponentLoading: (state) => state.componentLoading,
}

const mutations = {
  setIsLoading: (state, status) => {
    state.loading = status
  },

  setIsComponentLoading: (state, status) => {
    state.componentLoading = status
  },
}

export default {
  state,
  getters,
  mutations,
}
