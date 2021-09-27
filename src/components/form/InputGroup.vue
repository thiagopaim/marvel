<template>
  <div class="flex flex-col mb-5">
    <label class="mb-1 text-sm" :for="name">{{ label }}</label>
    <Input
      :class="
        `
          p-3 border
          ${error ? 'border-red-600' : 'border-gray-300'}
          rounded-sm
          bg-white
        `
      "
      :type="type"
      :name="name"
      :placeholder="placeholder"
    />
    <span
      v-if="error"
      :class="
        `
          pt-1
          pl-1
          text-xs
          text-red-600
        `
      "
    >
      Obrigatório
    </span>
  </div>
</template>

<script>
import Input from '@/components/form/InputGroup'

export default {
  name: 'InputGroup',

  components: {
    Input,
  },

  props: {
    label: {
      type: String,
      require: true,
    },

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

    error: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
