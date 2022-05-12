<template>
  <div class="d-flex align-items-center" @submit.prevent="$emit('callApi')">
    <input
     
      type="text"
      placeholder="cerca qualcosa..."
      class="p-1 bg-dark border-0 text-white border-bottom border-danger"
      :value="query"
      v-on:input="$emit('input', $event.target.value)"
    
    />
    <button @click="$emit('callApi')" class="btn btn-danger ms-3" type="submit">Search</button>
  </div>
</template>

<script>
export default {
    name: "searchBox",
    props:{
        query: String
    }
}
</script>

<style lang="scss" scoped>
</style>