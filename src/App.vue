<template>
  <div id="app">
    <div id="header">
      <Navbar />
      <Searchbar />
    </div>

    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/header/NavBar.vue'
import Searchbar from './components/header/SearchBar.vue'
import Footer from './components/footer/FooterBar.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Searchbar,
    Footer,
  }
}
</script>

<style>

</style>
