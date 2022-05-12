<template>
  <header
    class="p-3 d-flex align-items-center justify-content-between bg-black"
  >
    <img src="@/assets/rosflix.png" alt="" />
    <SearchBox v-model="query" @callApi="callApi" :query="query" />
  </header>
</template>

<script>
import SearchBox from "./SearchBox.vue";
import axios from "axios";
import state from "@/state.js";
export default {
  name: "SiteHeader",
  components: {
    SearchBox,
  },
  data() {
    return {
      Movies_URL:
        "https://api.themoviedb.org/3/search/movie?api_key=99bdc6e199d0021098cc0e8826508ec8&language=it-IT&page=1&include_adult=false&query=",
      Series_URL:
        "https://api.themoviedb.org/3/search/tv?api_key=99bdc6e199d0021098cc0e8826508ec8&language=it-IT&page=1&include_adult=false&query=",
      query: "",
      movies: "",
      series: "",
      language: "",
      loading: true,
    };
  },
  computed: {},
  methods: {
    
    callApi() {
      state.query = this.query;
      state.urlMovies = this.Movies_URL;
      state.urlSeries = this.Series_URL;

      const callApiMovies = axios.get(`${state.urlMovies}${state.query}`);
      const callApiSeries = axios.get(`${state.urlSeries}${state.query}`);
      Promise.all([callApiMovies,callApiSeries]).then((responses) => {
        state.movies = responses[0].data.results;
        state.series = responses[1].data.results;
        console.log(state.movies);
        console.log('----------');
        console.log(state.series);
      })
      /* Salvando nello stato movies e series url
      state.urlMovies = this.Movies_URL;
      state.urlSseries = this.Series_URL;

      // Salvo la query nello stato
      state.query = this.query;
      */
    },
  },
};
</script>

