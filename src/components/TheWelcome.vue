<template>
  <div>
    <h1>Cakes</h1>
    <ul>
      <li v-for="cake in cakes" :key="cake.id">
        <h3>{{ cake.title.rendered }}</h3>
        <h4>{{ cake.acf.price }}</h4>
        <p>{{ cake.acf.description }}</p>
        <p>{{ cake.acf.ingredients }}</p>
        <img class="hero-img-cake" :src="cake.acf.cake_image.url">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cakes: []
    };
  },
  mounted() {
    // Fetch data from custom post type endpoint
    axios.get('http://mandula-cakeshop.local/wp-json/wp/v2/cakes/cake')
      .then(response => {
        // Handle successful response
        this.cakes = response.data;

        console.log(response.data)
      })
      .catch(error => {
        // Handle error
        alert(error)
        console.error('Error fetching cakes:', error);
      });
  }
};
</script>
<style scoped>
.hero-img-cake {
  height: 300px;
  width: auto;
}
</style>
