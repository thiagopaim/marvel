<template>
  <div class="container mx-auto py-10 px-3">
    <div
      v-if="!isLoading && character !== null"
      class="grid sm:grid-cols-5 gap-10 sm:gap-15"
    >
      <div class="col-span-5 sm:col-span-2">
        <img
          :src="`${character.thumbnail.path}.${character.thumbnail.extension}`"
          alt=""
          class="w-full rounded-sm shadow-lg"
        />
      </div>

      <div class="col-span-5 sm:col-span-3">
        <div class="border-b-2 border-gray-200 pb-10 mb-10">
          <h1
            class="
              flex
              items-center
              mb-6
              text-gray-500
              font-bold
              text-3xl
              md:text-5xl
            "
          >
            {{ character.name }}
            <HeroFavorite :id="character.id" />
          </h1>
          <p class="text-lg" v-if="character.description">
            {{ character.description }}
          </p>
          <p v-else>A personagem não possui descrição</p>
        </div>

        <HeroComics :id="heroId" />
      </div>
    </div>
    <Loading v-else class="py-20" />
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import HeroComics from '@/components/HeroComics'
import HeroFavorite from '@/components/HeroFavorite'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Hero',

  components: {
    Loading,
    HeroComics,
    HeroFavorite,
  },

  data() {
    return {
      heroId: this.$route.params.id,
    }
  },

  computed: {
    ...mapGetters(['character', 'isLoading']),
  },

  methods: {
    ...mapActions(['fetchCharacter']),
  },

  mounted() {
    this.fetchCharacter(this.heroId)
  },
}
</script>
