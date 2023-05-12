<template>
  <div>
    <input
      ref="searchBox"
      type="text"
      class="search"
      placeholder="Search.."
      @input="debounceSearch"
      v-model="searchTerm"
      @focus="handleFocus"
    />
    <div id="results">
      <ul v-if="showSearchResult">
        <li :key="index" v-for="(tv, index) in searchResult">
          <router-link
            :to="`/tv/${tv.id}`"
            @click.native="showSearchResult = false"
          >
            <img :src="posterPath(tv.poster_path)" alt="" />
            <p>{{ tv.name }}</p>
          </router-link>
        </li>
      </ul>
      <div v-if="searchResult.length == 0 && showSearchResult">
        <p id="notfound">No result found for "{{ searchTerm }}"</p>
      </div>
    </div>
    <a href="https://www.themoviedb.org/" target="_blank"
      ><img src="@/assets/tmdb-logo.png" alt="tmdb logo"
    /></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResult: [],
      searchTerm: "",
      showSearchResult: false,
    };
  },
  mounted() {
    this.keyboardEvents();
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 3) {
          this.fetchSearch(event.target.value);
        } else {
          this.showSearchResult = false;
        }
      }, 600);
    },

    async fetchSearch(term) {
      try {
        const response = await this.$http.get("/search/tv?query=" + term);
        this.searchResult = response.data.results;
        this.showSearchResult = response.data.results ? true : false;
      } catch (error) {
        console.log(error);
      }
    },

    handleFocus() {
      if (this.searchTerm != "") {
        this.showSearchResult = true;
      }
    },
    keyboardEvents() {
      let windowObj = this;

      window.addEventListener("click", (e) => {
        if (!this.$el.contains(e.target)) {
          this.showSearchResult = false;
        }
      });

      window.addEventListener("keypress", (e) => {
        if (e.key == "47") {
          e.preventDefault();
          windowObj.$refs.searchBox.focus();
        }
      });
      window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          this.showSearchResult = false;
        }
      });
    },
    posterPath(poster_path) {
      if (poster_path) {
        return "https://image.tmdb.org/t/p/w500/" + poster_path;
      } else {
        return "src/assets/empty.png";
      }
    },
  },
};
</script>

<style scoped>
* {
  display: flex;
  align-items: center;
  gap: 2vw;
}

img {
  width: 80px;
  margin: 1vw;
}
.search {
  border: 1px solid #bababa;
  border-radius: 20px;
  height: 35px;
  width: 23vw;
  padding: 8px;
  outline: none;
  background: white;
  font-size: 17px;
}

#results {
  background-color: #555;
  position: absolute;
  z-index: 1;
  top: 10vh;
  width: 23vw;
  text-decoration: none;
  display: block;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 60vh;
}

a {
  text-decoration: none;
  color: #f7690c;
  font-weight: bold;
  font-style: italic;
  font-size: 1.3vw;
}

#notfound {
  font-size: 130%;
  text-align: center;
  color: white;
  font-style: italic;
}
@media only screen and (max-width: 700px) {
  .search {
    display: none;
  }
}
</style>
