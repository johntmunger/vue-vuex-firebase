<template>
  <main role="main">
    <section class="jumbotron text-center">
      <div class="container">
        <h1>Vue.js and Vuex Firebase Demo</h1>
        <p class="lead text-muted">
          This single page application is fetching a data collection from Firebase JS. There will be UI components added allowing users to add and update the data collection. The app uses Bootstrap for frontend CSS styling and Vuex for data and state management.
        </p>
      </div>
    </section>
    <Albums />
  </main>
</template>

<script>
import Albums from './Albums';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Albums
  },
  name: "AppMain",
    computed: {
    ...mapGetters(['allMessages'])
  },
  methods: {
    ...mapActions(['getMessageCollection']),
  },
  created: function () {
    this.$store.dispatch('getMessageCollection');
    // console.log('data', this.allMessages);
  }
}
</script>

<style scoped>
</style>

