<template>
  <div>
    <input
      class="search"
      type="text"
      placeholder="Search..."
      v-model="searchTerm"
    />
    <div class="absolute mt-12 rounded bg-gray-600 w-60 z-50">
      <ul class="mt-3" v-if="showSearchResult">
        <li :key="index" v-for="(tv, index) in searchResult">
          <router-link
            :to="`/tv/${tv.id}`"
            @click.native="showSearchResult = false"
            class="flex items-center border-b border-gray-500 p-1"
          >
            <img :src="posterPath(tv.poster_path)" alt="" class="w-10" />
            <span class="ml-3">{{ tv.title }}</span>
          </router-link>
        </li>
      </ul>
      <ul class="px-3" v-if="searchResult.length == 0 && showSearchResult">
        <li>No result found for "{{ searchTerm }}"</li>
      </ul>
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
        if (e.keyCode == "47") {
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
        return "https://via.placeholder.com/50x75";
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

@media only screen and (max-width: 700px) {
  .search {
    display: none;
  }
}
</style>
