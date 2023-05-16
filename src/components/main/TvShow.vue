<template>
  <div id="card">
    <img :src="posterPath" alt="poster" />
    <div>
      <h1>{{ this.tv.name }}</h1>
      <p id="tagline">{{ this.tv.tagline }}</p>
      <p>
        {{ this.tv.overview }}
      </p>
      <div id="genres">
        &#11088;<span> {{ Math.round(tv.vote_average * 10) }}% </span>
        | Genres:
        <span :key="index" v-for="(item, index) in tv.genres">
          {{ item.name }}
          <span v-if="tv.genres.length - 1 != index">,</span>
        </span>
      </div>
      <div id="seasons">
        <span>{{ this.tv.number_of_seasons }} Seasons</span> |
        <span>{{ this.tv.number_of_episodes }} Episodes</span>
      </div>
      <div id="back">
        <button type="button" onclick="window.history.go(-1)">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tv: {
        id: "",
        name: "",
        overview: "",
        vote_average: "",
        number_of_seasons: "",
        number_of_episodes: "",
        poster_path: "",
        genres: [],
        tagline: "",
      },
    };
  },
  watch: {
    "$route.params.id": {
      handler() {
        this.fetchShow(this.$route.params.id);
      },
      immediate: true,
    },
  },
  methods: {
    async fetchShow(showId) {
      const response = await this.$http.get("/tv/" + showId);
      this.tv = response.data;
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500" + this.tv.poster_path;
    },
  },
};
</script>
<style scoped>
#card {
  display: flex;
  width: 80%;
  margin: 10vh auto;
}

img {
  margin: 1vw;
  width: 30vw;
}

h1 {
  color: #f7690c;
  font-size: 3vw;
  font-weight: bolder;
  text-align: center;
  margin: 2vh;
}

#tagline {
  color: white;
  font-size: 1vw;
  text-align: center;
  margin: 2vh;
  font-style: italic;
}

#genres {
  color: white;
  font-size: 1.2vw;
  margin: 2vh;
}

p {
  color: white;
  font-size: 1.3vw;
  margin: 2vh;
}

#seasons {
  color: white;
  font-size: 1.2vw;
  margin: 2vh;
  text-align: center;
}

#back {
  display: flex;
  flex-direction: row-reverse;
}
button {
  display: flex;
  background-color: initial;
  background-image: linear-gradient(-180deg, #ff7e31, #e62c03);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter, -apple-system, system-ui, Roboto, "Helvetica Neue", Arial,
    sans-serif;
  height: 40px;
  line-height: 40px;
  outline: 0;
  overflow: hidden;
  pointer-events: auto;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  width: 10%;
  border: 0;
  transition: box-shadow 0.2s;
}

button:hover {
  box-shadow: rgba(253, 76, 0, 0.5) 0 3px 8px;
}

@media only screen and (max-width: 768px) {
  #card {
    display: list-item;
  }

  img {
    width: 65vw;
    place-items: center;
    margin-left: 6vw;
  }

  h1 {
    font-size: 25px;
  }

  #genres,
  p,
  #seasons {
    font-size: 12px;
  }

  #tagline {
    font-size: 10px;
  }
}
</style>
