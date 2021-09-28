<template>
  <div
    class="
      py-5
      sm:py-10
      bg-gray-200 
    "
  >
    <Loading class="pt-10" v-if="isLoading" />

    <ul
      v-else
      class="
        flex
        flex-wrap
        justify-center
        container
        list-none
        mx-auto
        gap-5
        px-3
      "
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
        v-for="item in characters"
        :key="item.id"
      >
        <HeroCard :hero="item" />
      </li>
    </ul>

    <HeroListEmpty v-if="!isLoading && characters.length <= 0" />

    <Paginate v-if="totalPages > 1" :fetch="fetchCharacters" />
  </div>
</template>

<script>
import HeroCard from '@/components/hero/HeroCard'
import Paginate from '@/components/layout/Paginate'
import Loading from '@/components/layout/Loading'
import HeroListEmpty from '@/components/hero/HeroListEmpty'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HeroList',

  props: {
    heros: {
      type: Array,
    },
  },

  components: {
    HeroCard,
    Paginate,
    Loading,
    HeroListEmpty,
  },

  data() {
    return {
      orderBy: 'name',
    }
  },

  computed: {
    ...mapGetters(['isLoading', 'characters', 'totalPages']),
  },

  methods: {
    ...mapActions(['fetchCharacters']),
  },

  mounted() {
    this.fetchCharacters()
  },
}
</script>
