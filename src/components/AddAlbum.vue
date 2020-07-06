<template>
<!-- TODO:: This component is currently muted functionality to be baked into the UI soon -->
  <div class="add">
    <h3>Add Album to Collection</h3>
    <div class="add">
      <form @submit="onSubmit"> 
        <input type="text" v-model="text" placeholder="Add Album">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddAlbum",
  data() {
    return {
      name: '',
      text: ''
    }
  },
  methods: {
    ...mapActions(['addAlbum']),
    onSubmit(e) {
      e.preventDefault();
      this.addAlbum(this.name, this.text);
    }
  }
};
</script>

<style scoped>
</style>