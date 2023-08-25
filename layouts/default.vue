<template>
  <div id="app">
    <NavbarHome />
    <Nuxt />
    <FooterPage />
  </div>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue'
import FooterPage from '../components/FooterPage.vue'
export default {
  component: {
    NavbarHome,
    FooterPage,
  },
}
</script>
