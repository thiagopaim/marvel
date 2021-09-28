<template>
  <main>
    <HeroFeatured />
    <HeroSearch />
    <HeroList :fetch="fetchCharacters" />
  </main>
</template>

<script>
import HeroFeatured from '@/components/HeroFeatured'
import HeroSearch from '@/components/HeroSearch'
import HeroList from '@/components/HeroList'
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  components: {
    HeroFeatured,
    HeroList,
    HeroSearch,
  },

  methods: {
    ...mapActions(['fetchCharacters']),
  },
}
</script>
