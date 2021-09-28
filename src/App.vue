<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <Toaster />
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Toaster from '@/components/layout/Toaster'

export default {
  name: 'App',

  components: { Header, Footer, Toaster },
}
</script>
