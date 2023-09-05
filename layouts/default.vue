<template>
  <div id="app">
    <NavbarHome />
    <Nuxt />
    <WaContact />
    <FooterPage />
  </div>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue'
import FooterPage from '../components/FooterPage.vue'
import WaContact from '../components/WaContact.vue'
export default {
  component: {
    NavbarHome,
    FooterPage,
    WaContact,
  },
}
</script>
