<template>
  <div id="app">
    <header class="p-3">
      
      <input v-model="query" type="text" />
      <button @click="callApi">Search</button>
    </header>
    <main>
      <div class="container py-4">
        <div class="row">
          <div class="col-2 mx-3 border border-secondary  py-4 g-3" v-for="movie in movies" :key="movie.id">
            <ul class="">
              <h1>Movie</h1>
                <h3>{{ movie.title }}</h3>
                <li>original title:{{ movie.original_title }}</li>
                <li v-if="movie.original_language === 'en'">Lingua
                <img src="@/assets/bandiera inglese.png" width="20px"></li>
                <li v-else>Lingua <flag :iso="movie.original_language" /></li>
                <li>Voto: {{ movie.vote_average }}</li>
             
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
  components: {},
  data() {
    return {
      query: "",
      movies: null,
      language: "",
      loading: true,
    };
  },
  computed: {},
  methods: {
    callApi() {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=99bdc6e199d0021098cc0e8826508ec8&language=it-IT&page=1&include_adult=false&query= + ${this.query}`)
        .then((response) => {
          this.movies = response.data.results;
          this.loading = false;
          //console.log(this.movies);
        })
        .catch((error) => {
          console.log(error);
          error;
          this.error = `Sorry There is a problem! ${error}`;
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
