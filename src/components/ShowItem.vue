<template>
  <div id="card">
    <router-link :to="`/tv/${tv.id}`">
      <img :src="posterPath" class="poster"/>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vw;
}

a img {
    width: 18vw;
    margin: 1vw;
  }

h3 {
    color: orangered;
    font-size: 1.3vw;
    font-weight: bold;
text-align: center;
}

#card-body {
font-size: 1vw;    
    color: white
}

#card-footer {
    font-size: 1vw;
    color: grey;
    margin: 3px;
    text-align: center;

}

@media only screen and (max-width: 768px) {
  h3 {
    font-size: 80%;
  }

  #card-body {
font-size: 9px;
}

#card-footer {
    font-size: 9px;   
}
}
</style>
