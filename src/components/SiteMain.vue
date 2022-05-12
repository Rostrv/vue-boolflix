<template>
<main>
  <div class="container-fluid py-4">
    <div class="row justify-content-evenly">
      <MovieComponent :movie="movie" v-for="movie in movies" :key="movie.id" />
    </div>
    <div class="row justify-content-evenly">
      <SerieComponent :serie="serie" v-for="serie in series" :key="serie.id" />
    </div>
  </div>
</main>
  
</template>

<script>
import MovieComponent from "./MovieComponent.vue";
import SerieComponent from "./SerieComponent.vue";
import state from "@/state.js";

export default {
  name: "SiteMain",
  components: {
    MovieComponent,
    SerieComponent,
  },
  computed: {
    movies() {
      return state.movies;
    },
        series() {
      return state.series;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: #0c0c0c;
  min-height: 100vh;
  max-height: auto;
}
</style>