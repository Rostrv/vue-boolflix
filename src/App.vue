<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
   <!--  <header
      class="p-3 d-flex align-items-center justify-content-between bg-black"
    >
      <img src="@/assets/rosflix.png" alt="" />
      <div class="d-flex align-items-center">
        <input v-model="query" type="text" placeholder="cerca qualcosa..." class="p-1 bg-dark border-0 text-white border-bottom border-danger" />
        <button class="btn btn-danger ms-3" @click="callApi">Search</button>
      </div>
    </header>
    <main>
      <div class="container-fluid py-4">
        <div class="row justify-content-evenly">
          <div
            class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mx-2 p-1 gy-5"
            v-for="movie in movies"
            :key="movie.id"
          >
            <div class="box-1">
              <div class="box_image">
                <img
                  v-if="movie.poster_path === null"
                  src="@/assets/not-found.png"
                  class="poster"
                />
                <img
                  v-else
                  :src="'http://image.tmdb.org/t/p/w342/' + movie.poster_path"
                  alt=""
                  class="poster"
                />
              </div>
              <div class="box_overlay">
                <div class="overlay_text">
                  <ul class="p-0">
                    <h5>Titolo: {{ movie.title }}</h5>
                    <li>Titolo originale:{{ movie.original_title }}</li>

                    <li v-if="movie.original_language === 'en'">
                      Lingua originale:
                      <img src="@/assets/bandiera-inglese.png" width="20px" />
                    </li>
                    <li v-else-if="movie.original_language === 'ja'">
                      Lingua originale:
                      <img
                        src="@/assets/bandiera-giapponese.png"
                        width="20px"
                      />
                    </li>
                    <li v-else>
                      Lingua originale: <flag :iso="movie.original_language" />
                    </li>
                    <Rate
                      :length="5"
                      :value="starsCalc(movie.vote_average)"
                    ></Rate>
                  </ul>
                  <div class="description">
                    <p>{{ movie.overview }}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-evenly">
          <div
            class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mx-2 p-1 gy-5"
            v-for="serie in series"
            :key="serie.id"
          >
            <div class="box-1">
              <div class="box_image">
                <img
                  v-if="serie.poster_path === null"
                  src="@/assets/not-found.png"
                  class="poster"
                />
                <img
                  v-else
                  :src="'http://image.tmdb.org/t/p/w342/' + serie.poster_path"
                  alt=""
                  class="poster"
                />
              </div>
              <div class="box_overlay">
                <div class="overlay_text">
                  <ul class="p-0">
                    <h5>Titolo: {{ serie.name }}</h5>

                    <li>Titolo originale:{{ serie.original_name }}</li>
                    <li v-if="serie.original_language === 'en'">
                      Lingua originale:
                      <img src="@/assets/bandiera-inglese.png" width="20px" />
                    </li>
                    <li v-else-if="serie.original_language === 'ja'">
                      Lingua originale:
                      <img src="@/assets/bandiera-inglese.png" width="20px" />
                    </li>
                    <li v-else>
                      Lingua <flag :iso="serie.original_language" />
                    </li>

                    <Rate
                      :length="5"
                      :value="starsCalc(serie.vote_average)"
                    ></Rate>
                    <div class="description">
                      <p>{{ serie.overview }}</p>
                    </div>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main> -->
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
/* import axios from "axios";
import Rate from "../node_modules/vue-rate/src/Rate.vue"; */

export default {
  name: "App",
  components: {
   // Rate,
   SiteHeader,
   SiteMain
  },
  /* data() {
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
    starsCalc(vote) {
      return Math.round(Number(vote) / 2); // funzione che divide il punteggio totale / 2 -> il punteggio così sarà sulla base di max 5 stelline
    },

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
  }, */
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}

main {
  background-color: #0c0c0c;
  min-height: 100vh;
  max-height: auto;
  
  
}

p {
  font-size: 15px;
  line-height: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 800px;
}

/* .btn:hover{
  box-shadow: 0px 0px 10px 10px rgba(255, 0, 0, 0.847);
}

.box-1 {
  position: relative;
  transition: all 0.5s ease-in;
  height: auto;
}

.poster {
  width: 100%;
  height: 460px;
}

.box_image {
  display: block;
  width: 100%;
  height: auto;
}

.box_overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: none;
  transition: 0.2s ease;
  background-color: #393839;
}

.box-1:hover .box_overlay {
  opacity: 1;
  box-shadow: 0px 0px 10px 10px rgba(255, 0, 0, 0.847);
}

.description{
overflow-y:auto;
height: 150px;
}

.overlay_text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px;
} */
</style>
