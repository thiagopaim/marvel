import Vue from 'vue'
import Vuex from 'vuex'

import characters from './models/characters'
import favorite from './models/favorite'
import loading from './models/loading'
import paginate from './models/paginate'
import toaster from './models/toaster'
import user from './models/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    characters,
    favorite,
    loading,
    paginate,
    toaster,
    user,
  },
})

export default store
