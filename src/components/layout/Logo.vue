<template>
  <router-link to="/" class="p-2 bg-red-600">
    <img :src="logo" :width="120" alt="Marvel - Leads2B" />
  </router-link>
</template>

<script>
import logo from '@/assets/images/logo-marvel.png'

export default {
  name: 'Logo',

  data() {
    return {
      logo: logo,
    }
  },
}
</script>
