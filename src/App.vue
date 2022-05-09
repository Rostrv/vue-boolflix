<template>
  <div id="app">
    <header class="p-3">
      <input v-model="query" type="text" />
      <button @click="callApi">Search</button>
    </header>
    <main>
      <div class="container py-4">
        <div class="row">
          <div
            class="col-2 mx-3 border border-secondary py-4 g-3"
            v-for="movie in movies"
            :key="movie.id"
          >
            <h1>Movie</h1>
            <img
              :src="'http://image.tmdb.org/t/p/w200/' + movie.poster_path"
              alt=""
            />

            <ul class="">
              <h3>{{ movie.title }}</h3>
              <h3>{{ movie.name }}</h3>
              <li>Titolo originale:{{ movie.original_title }}</li>
              
              <li v-if="movie.original_language === 'en'">
                Lingua originale <img src="@/assets/bandiera inglese.png" width="20px" />
              </li>
              <li v-else>Lingua originale <flag :iso="movie.original_language" /></li>
              <li>Voto: {{ movie.vote_average }}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div
            class="col-2 mx-3 border border-secondary py-4 g-3"
            v-for="serie in series"
            :key="serie.id"
          >
            <h1>Series</h1>
            <img
              :src="'http://image.tmdb.org/t/p/w200/' + serie.poster_path"
              alt=""
            />
            <ul class="">
              <h3>{{ serie.name }}</h3>

              <li>Titolo originale:{{ serie.original_name }}</li>
              <li v-if="serie.original_language === 'en'">
                Lingua originale <img src="@/assets/bandiera inglese.png" width="20px" />
              </li>
              <li v-else>Lingua <flag :iso="serie.original_language" /></li>
              <li>Voto: {{ serie.vote_average }}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      Movies_URL:
        "https://api.themoviedb.org/3/search/movie?api_key=99bdc6e199d0021098cc0e8826508ec8&language=it-IT&page=1&include_adult=false&query=",
      Series_URL:
        "https://api.themoviedb.org/3/search/tv?api_key=99bdc6e199d0021098cc0e8826508ec8&language=it-IT&page=1&include_adult=false&query=",
      query: "",
      movies: null,
      series: null,
      language: "",
      loading: true,
    };
  },
  computed: {},
  methods: {
    callApi() {
      this.callApiMovies(), this.callApiSeries();
    },
    callApiMovies() {
      axios
        .get(`${this.Movies_URL}${this.query}`)
        .then((response) => {
          this.movies = response.data.results;

          this.loading = false;
          //console.log(this.movies);
        })
        .catch((error) => {
          console.log(error);
          error;
          this.error = `Sorry There is a problem in Movies ${error}`;
        });
    },
    callApiSeries() {
      axios
        .get(`${this.Series_URL}${this.query}`)
        .then((response) => {
          this.series = response.data.results;

          this.loading = false;
          //console.log(this.movies);
        })
        .catch((error) => {
          console.log(error);
          error;
          this.error = `Sorry There is a problem in Series ${error}`;
        });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 800px;
}
</style>
