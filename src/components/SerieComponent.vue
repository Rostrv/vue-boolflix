<template>
<div
    class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mx-2 p-1 gy-5"
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
          <li v-else>Lingua <flag :iso="serie.original_language" /></li>

          <Rate :length="5" :value="starsCalc(serie.vote_average)"></Rate>
          <div class="description">
            <p>{{ serie.overview }}</p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Rate from "../../node_modules/vue-rate/src/Rate.vue";
export default {
  name: "SerieComponent",
  props:{
      serie:Object
  },
  components: {
    Rate,
  },
  methods: {
    starsCalc(vote) {
      return Math.round(Number(vote) / 2); // funzione che divide il punteggio totale / 2 -> il punteggio così sarà sulla base di max 5 stelline
    },
  },
};
</script>

<style lang="scss" scoped>
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
}
</style>