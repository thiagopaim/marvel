<template>
  <div class="heroFeatured">
    <h1 class="heroFeatured__title">
      Wolverine
    </h1>
    <img :src="image" alt="Wolverine" class="heroFeatured__hero" />
  </div>
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
