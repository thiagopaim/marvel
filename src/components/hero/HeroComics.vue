<template>
  <div>
    <h2 class="mb-5 text-xl font-bold text-gray-500">Aparições</h2>
    <Loading v-if="isComponentLoading" class="pt-10" />

    <ul v-if="characterComics.length >= 1" class="flex flex-wrap">
      <li
        class="w-full xs:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/4 border-8 border-white mb-5"
        v-for="item in characterComics"
        :key="item.id"
      >
        <img
          :src="`${item.thumbnail.path}.${item.thumbnail.extension}`"
          :alt="`Capa para ${item.title}`"
        />
        <h3>{{ item.title }}</h3>
      </li>
    </ul>
    <p v-if="!isComponentLoading && characterComics.length <= 0">
      Nenhuma aparição para listar
    </p>

    <Paginate
      v-if="totalPages > 1"
      :fetch="handlePaginateComics"
      :pageNumbers="false"
    />
  </div>
</template>

<script>
import Paginate from '@/components/layout/Paginate'
import Loading from '@/components/layout/Loading'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HeroComics',

  props: {
    id: {
      type: String,
    },
  },

  components: {
    Paginate,
    Loading,
  },

  computed: {
    ...mapGetters(['isComponentLoading', 'characterComics', 'totalPages']),
  },

  methods: {
    ...mapActions(['fetchCharactersComics']),

    handlePaginateComics() {
      this.fetchCharactersComics(this.id)
    },
  },

  mounted() {
    this.fetchCharactersComics(this.id)
  },
}
</script>
