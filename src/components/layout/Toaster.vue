<template>
  <div class="toaster">
    <div
      :class="
        `
          toaster__wrapper
          flex
          items-start
          rounded-sm
          text-white
          ${toasterColor}
          ${isToasterOpen ? 'isOpen' : ''}
        `
      "
    >
      <span class="toaster__timer"></span>
      <div class="toaster__message">
        {{ toasterMessage }}
      </div>
      <div class="toaster__close">
        <i class="mdi mdi-close" @click="hideToaster"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Toaster',

  computed: {
    ...mapGetters(['isToasterOpen', 'toasterMessage', 'toasterColor']),
  },

  methods: {
    ...mapActions(['hideToaster']),
  },
}
</script>
