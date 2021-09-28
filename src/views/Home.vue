<template>
  <main>
    <HeroFeatured />
    <HeroSearch />
    <HeroList :fetch="fetchCharacters" />
  </main>
</template>

<script>
import HeroFeatured from '@/components/hero/HeroFeatured'
import HeroSearch from '@/components/hero/HeroSearch'
import HeroList from '@/components/hero/HeroList'
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
