<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black">
  <div class="container-fluid">
     <img src="@/assets/rosflix.png" alt="" class="me-5"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="glow" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="glow" href="#">Film</a>
        </li>
        <li class="nav-item">
          <a class="glow" href="#">Serie Tv</a>
        </li>
        <li class="nav-item">
          <a class="glow" href="#">Consigliati</a>
        </li>
        
        
      </ul>
      <form class="d-flex">
        <SearchBox v-model="query" @callApi="callApi" :query="query"/>
      </form>
    </div>
  </div>
</nav>
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
      Promise.all([callApiMovies,callApiSeries]).then((response) => {
        state.movies = response[0].data.results;
        state.series = response[1].data.results;
        /* console.log(state.movies);
        console.log('----------');
        console.log(state.series); */
      })
     
    },
  },
};
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: white;
  margin:0px 15px;
}
.glow {
  font-size: 20px;
  color: #fff;
  text-align: center;
  animation: glow 0.5s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 0px #e60073, 0 0 0px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6;
}
}
</style>

