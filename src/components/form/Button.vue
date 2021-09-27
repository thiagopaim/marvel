<template>
  <button
    :class="
      `
        flex
        justify-center
        gap-3
        py-2
        px-5
        items-center
        bg-red-600
        text-white
        rounded-sm
        transition-colors
        ${direction ? 'flex-row-' + direction : ''}
        hover:bg-red-500
        disabled:opacity-80
      `
    "
    :disabled="isLoading"
  >
    <div v-if="!isLoading">
      <i v-if="icon" :class="`mdi mdi-${icon} text-xl leading-snug`" />
      <span class="font-bold text-sm">
        {{ label }}
      </span>
    </div>
    <i
      v-else
      class="
        mdi
        mdi-loading
        text-2xl
        text-white
        leading-none
        animate-spin
      "
    />
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    label: {
      type: String,
      default: 'Enviar',
    },

    icon: {
      type: String,
    },

    direction: {
      type: String,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
