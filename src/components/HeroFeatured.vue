<template>
  <router-link to="/hero/1009718" class="heroFeatured">
    <h1 class="heroFeatured__title">
      Wolverine
    </h1>
    <img :src="image" alt="Wolverine" class="heroFeatured__hero" />
  </router-link>
</template>

<script>
import heroImage from '@/assets/images/img-wolverine.png'

export default {
  name: 'HeroFeatured',

  data() {
    return {
      image: heroImage,
    }
  },
}
</script>
