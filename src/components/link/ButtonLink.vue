<template>
  <router-link
    :to="path"
    class="flex items-center justify-center py-2 px-5 bg-red-600 text-white rounded-sm"
  >
    <i
      v-if="icon"
      :class="`mdi mdi-${icon} mr-2 opacity-80 text-xl leading-snug`"
    />
    <span class="font-bold text-sm">
      {{ label }}
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'ButtonLink',

  props: {
    label: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
    },

    path: {
      type: String,
      required: true,
    },
  },
}
</script>
