<template>
  <div
    :class="
      `
        grid
        grid-cols-2
        ${pageNumbers ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}
        w-full
        md:w-1/2
        mx-auto
        gap-10
        pt-20
        pb-10
      `
    "
  >
    <button
      class="
        colspan-1
        order-1
        flex
        gap-3
        py-2
        px-5
        mx-auto
        rounded-full
        items-center
        text-gray-500
        hover:bg-gray-300
        disabled:opacity-50
        transition-colors
      "
      :disabled="currentPage <= 1"
      @click="handlePaginationBackward"
    >
      <i class="mdi mdi-chevron-left text-xl leading-snug" />
      <span class="font-bold text-sm">
        Anterior
      </span>
    </button>

    <span
      v-if="pageNumbers"
      class="
        colspan-1
        order-2
        hidden
        sm:flex
        gap-5
        justify-center
        items-center
        mx-auto
        text-sm
        text-gray-500
      "
    >
      <input
        v-model="page"
        @change="handleGoToPage"
        type="text"
        class="
          w-8
          text-center
          border-b
          border-gray-400
          bg-transparent
        "
      />
      <span class="w-5 text-center">de</span>
      <span class="w-8 text-center">{{ totalPages }}</span>
    </span>

    <button
      class="
        colspan-1
        order-3
        flex
        gap-3
        py-2
        px-5
        mx-auto
        rounded-full
        items-center
        text-gray-500
        hover:bg-gray-300
        disabled:opacity-50
        transition-colors
      "
      :disabled="currentPage >= totalPages"
      @click="handlePaginateForward"
    >
      <span class="font-bold text-sm">
        Próximo
      </span>
      <i class="mdi mdi-chevron-right text-xl leading-snug" />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Paginate',

  props: {
    fetch: {
      type: Function,
      required: true,
    },

    pageNumbers: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      page: 1,
    }
  },

  computed: {
    ...mapGetters(['currentPage', 'totalPages', 'offsetPage', 'itemsPerPage']),
  },

  methods: {
    ...mapMutations(['setCurrentPage', 'setOffsetPage']),

    handleGoToPage() {
      if (this.page > 1 || this.page < this.totalPages) {
        Promise.resolve(this.setCurrentPage(this.page))
          .then(() => this.setOffsetPage((this.page - 1) * this.itemsPerPage))
          .then(() => this.fetch())
      }
    },

    handlePaginateForward() {
      if (this.currentPage < this.totalPages) {
        Promise.resolve(this.setCurrentPage(this.page + 1))
          .then(() => (this.page = this.currentPage))
          .then(() => this.setOffsetPage((this.page - 1) * this.itemsPerPage))
          .then(() => this.fetch())
      }
    },

    handlePaginationBackward() {
      if (this.currentPage > 1) {
        Promise.resolve(this.setCurrentPage(this.page - 1))
          .then(() => (this.page = this.currentPage))
          .then(() => this.setOffsetPage(this.offsetPage - this.itemsPerPage))
          .then(() => this.fetch())
      }
    },
  },
}
</script>
