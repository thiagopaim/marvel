<template>
  <div>
    <div class="flex items-start container mx-auto px-3 pt-10 pb-14">
      <div class="mr-auto">
        <p class="text-gray-500 text-xl">Olá,</p>
        <h1
          class="
            flex
            items-center
            font-bold
            text-3xl
            text-gray-500
            md:text-5xl
          "
        >
          {{ user.name }}
        </h1>
      </div>
      <span
        class="
          py-3
          px-8
          rounded-sm
          leading-none
          text-gray-50
          bg-gray-400
          hover:bg-gray-500
          cursor-pointer
        "
        @click="logoutUser"
      >
        Sair
      </span>
    </div>

    <UserFavorites />
  </div>
</template>

<script>
import UserFavorites from '@/components/UserFavorites'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Profile',

  components: {
    UserFavorites,
  },

  computed: {
    ...mapGetters(['user']),
  },

  methods: {
    ...mapActions(['logoutUser']),
  },
}
</script>
