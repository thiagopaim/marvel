const state = {
  offsetPage: 0,
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 20,
}

const getters = {
  currentPage: (state) => state.currentPage,
  totalPages: (state) => state.totalPages,
  itemsPerPage: (state) => state.itemsPerPage,
  offsetPage: (state) => state.offsetPage,
}

const mutations = {
  setCurrentPage: (state, currentPage) => {
    state.currentPage = currentPage
  },

  setTotalPages: (state, totalPages) => {
    state.totalPages = Math.ceil(totalPages / state.itemsPerPage)
  },

  setOffsetPage: (state, offset) => {
    state.offsetPage = offset
  },
}

export default {
  state,
  getters,
  mutations,
}
