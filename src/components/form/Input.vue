<template>
  <input :type="type" :name="name" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'Input',

  props: {
    type: {
      type: String,
      default: 'text',
    },

    name: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
    },
  },
}
</script>
