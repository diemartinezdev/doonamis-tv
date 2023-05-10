<template>
  <div id="app">
    <div id="header">
      <Navbar />
      <Searchbar />
    </div>

    <RouterView />
  </div>
</template>

<script>
import Navbar from './components/header/NavBar.vue'
import Searchbar from './components/header/SearchBar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Searchbar,
  }
}
</script>

<style>

</style>
