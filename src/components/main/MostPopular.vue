<template>
  <div>
    <h2>Most Popular</h2>
    <div class="container">
      <ShowItem :key="tv.id" v-for="tv in tvs" :tv="tv" :genres="genres" />
    </div>
  </div>
</template>

<script>
import ShowItem from "../ShowItem.vue";

export default {
  components: {
    ShowItem,
  },

  data: function () {
    return {
      tvs: [],
      genres: [],
    };
  },
  async mounted() {
    this.fetchGenres();
    try {
      const response = await this.$http.get("/tv/popular");
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
};
</script>

<style>
h2 {
  font-size: 160%;
  color: #a14c17;
  font-weight: bolder;
  text-transform: uppercase;
  margin-top: 2vh;
  text-align: center;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2vw;
  justify-items: center;
}

@media only screen and (max-width: 768px) {
    .container {
      display: grid;
  grid-template-columns: 300px 1fr;
}

h2 {
  font-size: 110%;
}
}
</style>
