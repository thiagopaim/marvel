<template>
  <div class="py-5 border-b border-gray-200">
    <div class="container mx-auto flex items-center px-3">
      <Logo class="mr-auto" />
      <HeaderUser v-if="isLogged" />
      <ButtonLink
        v-if="!isLogged"
        label="Login"
        path="/login"
        icon="account-circle-outline"
      />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/layout/Logo'
import HeaderUser from '@/components/layout/HeaderUser'
import ButtonLink from '@/components/link/ButtonLink'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',

  components: {
    Logo,
    HeaderUser,
    ButtonLink,
  },

  computed: {
    ...mapGetters(['isLogged']),
  },
}
</script>
