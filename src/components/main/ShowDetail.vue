<template>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
      <img :src="posterPath" alt="" class="w-64 md:w-full" />
      <div class="ml-24">
        <h1 class="text-4xl font-semibold">{{ this.tv.title }}</h1>
        <span class="text-gray-500 text-sm flex">
          &#11088;<span
            >{{ tv.vote_average * 10 }}% | {{ tv.last_air_date }}
          </span>

          <span :key="index" v-for="(item, index) in tv.genres" class="ml-1">
            {{ item.name }}
            <span v-if="tv.genres.length - 1 != index">,</span>
          </span>
        </span>
        <p class="mt-5">
          {{ this.tv.overview }}
        </p>

        <div class="mt-5">
          <span class="mt-5 font-semibold"
            >{{ this.tv.number_of_seasons }} Seasons</span
          >
          <span class="ml-5 font-semibold"
            >{{ this.tv.number_of_episodes }} Episodes</span
          >
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {

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
            const response = await this.$http.get(
                "/tv/" + showId + "?append_to_response=credits,videos,images"
            );
            this.tv = response.data;
        },
    },
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
        },
    }
}    
</script>
<style></style>
