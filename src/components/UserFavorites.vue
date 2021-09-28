<template>
  <div class="py-20  bg-gray-200 ">
    <div class="container mx-auto px-3">
      <h2 class="mb-5 text-4xl text-center font-bold text-gray-500">
        Favoritos
      </h2>
      <ul
        class="
        flex
        flex-wrap
        gap-5
        justify-center
        list-none
        mx-auto
      "
        v-if="favorites.length > 0"
      >
        <li
          class="
          xs:w-1/2
          sm:w-1/3
          md:w-1/4
          lg:w-1/6
          overflow-hidden
          rounded-sm
          bg-white
          transition-transform
          transform
          shadow
          hover:scale-105
          hover:shadow-xl
        "
          v-for="item in favorites"
          :key="item.id"
        >
          <span
            :class="
              `
              text-red-600
                heroFavorite__unfavorite 
                ${isLoading ? 'isLoading' : ''}
              `
            "
            @click="
              () => {
                handleUnfavorite(item.id)
                handleReloadPage()
              }
            "
          ></span>
          <HeroCard :hero="item" />
        </li>
      </ul>
      <p class="text-gray-400 text-center" v-else>Nenhum favorito ainda...</p>
    </div>
  </div>
</template>

<script>
import HeroCard from '@/components/HeroCard'
import router from '@/router'
import { mapActions } from 'vuex'

export default {
  name: 'UserFavorites',

  components: {
    HeroCard,
  },

  data() {
    return {
      favorites: [],
      isLoading: false,
    }
  },

  methods: {
    ...mapActions(['handleUnfavorite']),

    handleFetchFavorites() {
      Promise.resolve(JSON.parse(localStorage.getItem('favorites'))).then(
        (favorites) => {
          this.favorites = favorites
        }
      )
    },

    handleReloadPage() {
      this.isLoading = true

      setTimeout(() => {
        router.go()
      }, 500)
    },
  },

  mounted() {
    this.handleFetchFavorites()
  },
}
</script>
