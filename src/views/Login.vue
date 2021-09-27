<template>
  <div class="flex justify-center py-20 px-3 bg-gray-300">
    <form
      @submit.prevent="handleSubmit"
      ref="formLogin"
      class="w-full max-w-sm p-8 bg-white rounded-sm shadow"
    >
      <h1 class="pb-7 mb-7 border-b-2 text-3xl">Login</h1>

      <InputGroup
        label="Usuário"
        name="email"
        placeholder="Seu usuário"
        :error="errors.includes('email')"
      />

      <InputGroup
        label="Senha"
        name="password"
        type="password"
        placeholder="Sua senha"
        :error="errors.includes('password')"
      />

      <Button
        type="submit"
        label="Acessar"
        class="w-full"
        :isLoading="isLoading"
      />
    </form>
  </div>
</template>

<script>
import InputGroup from '@/components/form/InputGroup'
import Button from '@/components/form/Button'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',

  components: {
    InputGroup,
    Button,
  },

  data() {
    return {
      email: '',
      password: '',
      errors: [],
    }
  },

  computed: {
    ...mapGetters(['isLoading']),
  },

  methods: {
    ...mapActions(['loginUser']),

    handleSubmit({ target }) {
      const { email, password } = target
      this.errors = []

      !email.value && this.errors.push('email')
      !password.value && this.errors.push('password')

      if (this.errors.length >= 1) return false

      this.loginUser({ email: email.value, password: password.value })
    },
  },
}
</script>
