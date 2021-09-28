<template>
  <router-link :to="`/hero/${hero.id}`" class="heroCard">
    <div
      class="
        w-full
        h-auto
        lg:h-44
        xl:h-56
        border-b-2
        border-red-600
        overflow-hidden
        heroCard__image
      "
    >
      <img
        :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
        alt="Spider-Man"
        class="w-full min-h-full"
      />
    </div>

    <div class="py-5 px-3">
      <h3 class="font-bold">
        {{ hero.name }}
      </h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'HeroCard',

  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
}
</script>
