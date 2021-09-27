<template>
  <div class="heroSearch bg-gray-700 px-3 py-10">
    <div class="heroSearch__wrapper">
      <input
        type="text"
        :class="
          `
            heroSearch__field
            bg-gray-100
            ${name.length >= 3 ? 'showResult' : ''}
          `
        "
        placeholder="Procure pelo herói ou vilão"
        @keyup="handleFilterByName"
        v-model="name"
      />

      <span class="heroSearch__helper text-sm text-gray-400">
        Precisa ter <strong>três</strong> letras ou mais
      </span>

      <i v-if="isLoading" class="mdi mdi-loading leading-none animate-spin" />
      <i v-else class="mdi mdi-magnify leading-none" />

      <!-- --- -->
      <ul
        v-if="
          !isLoading && charactersSearchResult.length >= 1 && name.length >= 3
        "
        class="heroSearch__result bg-gray-100"
      >
        <li
          class="heroSearch__item"
          v-for="item in charactersSearchResult"
          :key="item.id"
        >
          <router-link :to="`/hero/${item.id}`" class="heroSearch__link">
            <div class="heroSearch__thumb">
              <img
                :src="`${item.thumbnail.path}.${item.thumbnail.extension}`"
                :alt="`Avatar de ${item.name}`"
              />
            </div>
            <div class="heroSearch__name">
              {{ item.name }}
            </div>
          </router-link>
        </li>
      </ul>
      <!-- --- -->
      <ul v-if="name !== '' && isEmpty" class="heroSearch__result bg-gray-100">
        <li class="heroSearch__item--empty">
          Nenhum herói ou vilão encontrados
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HeroSearch',

  data() {
    return {
      isEmpty: false,
      isLoading: false,
      timer: null,
      name: '',
    }
  },

  computed: {
    ...mapGetters(['charactersSearchResult']),
  },

  methods: {
    ...mapActions(['fetchCharactersFilteredByName']),

    ...mapMutations(['setCharactersSearchResult']),

    handleFilterByName() {
      this.isEmpty = false
      clearTimeout(this.timer)
      this.setCharactersSearchResult([])

      this.timer = setTimeout(() => {
        if (this.name.length >= 3) {
          this.isLoading = true

          this.fetchCharactersFilteredByName(this.name)
            .then(() => {
              if (this.charactersSearchResult.length <= 0) this.isEmpty = true
            })
            .finally(() => {
              this.isLoading = false
            })
        }
      }, 500)
    },
  },
}
</script>
