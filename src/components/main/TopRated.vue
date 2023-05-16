<template>
    <div>
      <h2>Top Rated</h2>
      <div class="container">
        <ShowItem 
      :key="tv.id"
      v-for="tv in tvs"
      :tv="tv"
      :genres="genres"
        />
        </div>
    </div>
  </template>
  
  <script>
  import ShowItem from '../ShowItem.vue'
  
  export default {
      components: {
          ShowItem,
      },
      
    data: function() {
      return {
        tvs: [],
        genres: [],
      };
    },
    async mounted() {
      this.fetchGenres();
      try {
        const response = await this.$http.get("/tv/top_rated");
        this.tvs = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  
    methods: {
      async fetchGenres() {
        try {
          const response = await this.$http.get("/genre/tv/list");
          this.genres = response.data.genres;
        } catch (error) {
          console.log(error);
        }
      },
    },
  }
  </script>
  
  <style>

  </style>
  