<template>
  <div id="card">
    <router-link :to="`/tv/${tv.id}`">
      <img :src="posterPath" />
    </router-link>
    <h3>{{ tv.name }}</h3>
    <div id="card-body">
        <span>&#11088; {{ tv.vote_average * 10 }}% | First on Air: {{ tv.first_air_date }} </span>
        <br />
    </div>
    <span id="card-footer">
      <span :key="genre" v-for="(genre, index) in tv.genre_ids">
        {{ genreTypeName(genre, index) }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tv: {
      required: true,
    },
    genres: {
      required: true,
    },
  },

  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.tv.poster_path;
    },
  },

  methods: {
    genreTypeName(genraId, index) {
      for (const item of this.genres) {
        if (item.id == genraId) {
          if (this.tv.genre_ids.length - 1 == index) {
            return item.name;
          } else {
            return item.name + ",";
          }
        }
      }
    },
  },
};
</script>

<style scoped>
#card {
margin: 2vw;
}

img {
    width: 20vw;
}

h3 {
    color: orangered;
    font-size: 150%;
    font-weight: bold;
text-align: center;
margin: 5px;
}

#card-body {
    display: flex;
    color: white
}

#card-footer {
    font-size: small;
    color: grey;
    margin: 3px;
}
</style>
