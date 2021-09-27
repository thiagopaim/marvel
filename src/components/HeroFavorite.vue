<template>
  <div
    class="
      ml-auto
      pl-5
      text-3xl
      md:text-5xl
      text-red-600
      cursor-pointer
      leading-none
      border-l-2
    "
    title="Favorito"
  >
    <i v-if="isFavorite" class="mdi mdi-star" @click="handleUnfavorite(id)"></i>
    <i v-else class="mdi mdi-star-outline" @click="handleFavorite(id)"></i>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HeroFavorite',

  props: {
    id: {
      type: Number || String,
    },
  },

  computed: {
    ...mapGetters(['isFavorite']),
  },

  methods: {
    ...mapActions(['handleFavorite', 'handleUnfavorite', 'checkFavorite']),
  },

  mounted() {
    this.checkFavorite(this.id)
  },
}
</script>
