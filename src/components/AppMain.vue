<template>
  <main role="main">
    <section class="jumbotron text-center">
      <div class="container">
        <h1>{{ allMessages.title }}</h1>
        <p class="lead text-muted">{{ allMessages.description }}</p>
        <p>
          <a href="https://vuex-firebase-demo.firebaseio.com/messages" target="_blank" class="btn btn-primary my-2">Go to Firebase collection</a>
          <!-- <a href="#" class="btn btn-secondary my-2">Add to the collection</a> -->
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

