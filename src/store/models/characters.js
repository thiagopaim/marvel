import { api } from '@/services'

const state = {
  character: null,
  characters: [],
  charactersSearchResult: [],
  characterComics: [],
}

const getters = {
  character: (state) => state.character,
  characters: (state) => state.characters,
  charactersSearchResult: (state) => state.charactersSearchResult,
  characterComics: (state) => state.characterComics,
}

const actions = {
  async fetchCharacter({ commit }, id) {
    commit('setCharacter', null)
    commit('setIsLoading', true)

    try {
      const {
        data: { data },
      } = await api.get(`characters/${id}`)
      const { results } = await data

      commit('setCharacter', results[0])
    } catch (error) {
      console.log(error)
    } finally {
      commit('setIsLoading', false)
    }
  },

  async fetchCharacters({ commit, rootState }) {
    commit('setIsLoading', true)

    const offset = rootState.paginate.offsetPage

    try {
      const {
        data: { data },
      } = await api.get(`characters?offset=${offset}`)
      const { total, results } = await data

      commit('setCharacters', results)
      commit('setTotalPages', total)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setIsLoading', false)
    }
  },

  async fetchCharactersFilteredByName({ commit }, name) {
    try {
      const {
        data: { data },
      } = await api.get(`characters?nameStartsWith=${name}`)
      const { results } = await data

      commit('setCharactersSearchResult', results)
    } catch (error) {
      console.log(error)
    }
  },

  async fetchCharactersFilteredByNameEnterKey({ commit }, name) {
    try {
      const {
        data: { data },
      } = await api.get(`characters?nameStartsWith=${name}`)
      const { total, results } = await data

      commit('setCharacters', results)
      commit('setTotalPages', total)
      commit('setCharactersSearchResult', [])
    } catch (error) {
      console.log(error)
    }
  },

  async fetchCharactersComics({ commit, rootState }, id) {
    commit('setIsComponentLoading', true)
    commit('setCharacterComics', [])

    const offset = rootState.paginate.offsetPage

    try {
      const {
        data: { data },
      } = await api.get(
        `characters/${id}/comics?offset=${offset}&orderBy=onsaleDate`
      )
      const { total, results } = await data

      commit('setCharacterComics', results)
      commit('setTotalPages', total)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setIsComponentLoading', false)
    }
  },
}

const mutations = {
  setCharacter: (state, character) => {
    state.character = character
  },

  setCharacters: (state, characters) => {
    state.characters = characters
  },

  setCharactersSearchResult: (state, characters) => {
    state.charactersSearchResult = characters
  },

  setCharacterComics: (state, comics) => {
    state.characterComics = comics
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
