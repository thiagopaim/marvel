<template>
  <router-link class="flex items-center" to="/profile">
    <i
      class="mdi mdi-account-circle-outline text-5xl leading-none opacity-30"
    ></i>
    <div class="hidden sm:block ml-2 pl-3 border-l-2">
      <p class="leading-none text-gray-600 font-bold text-sm">
        {{ user.name }}
      </p>
      <small class="leading-none text-gray-500">{{ user.email }}</small>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderUser',

  computed: {
    ...mapGetters(['user']),
  },
}
</script>
