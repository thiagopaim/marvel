<template>
  <main>
    <HeroSearch />
    <HeroList />
  </main>
</template>

<script>
import HeroSearch from '@/components/HeroSearch'
import HeroList from '@/components/HeroList'

export default {
  name: 'Home',

  components: {
    HeroList,
    HeroSearch,
  },
}
</script>
