<template>
  <div id="app">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
  // import AddAlbum from './components/AddAlbum';
  import firebase from './firebase';
  import AppHeader from './components/AppHeader';
  import AppMain from './components/AppMain';
  import Albums from './components/Albums.vue';
  import AppFooter from './components/AppFooter';
  
  export default {
    name: 'app',
    components: {
      // AddAlbum, TODO:: Add this functionality
      AppHeader,
      AppMain,
      Albums,
      AppFooter
    }
  }
</script>

<style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
  
  .jumbotron {
    margin-bottom: 0;
    background-color: #fff;
  }

  @media (min-width: 768px) {
    .jumbotron {
      padding-top: 5rem;
      padding-bottom: 4rem;
    }
  }

  .jumbotron p:last-child {
    margin-bottom: 0;
  }

  .jumbotron .container {
    max-width: 51rem;
  }

  footer {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  footer p {
    margin-bottom: .25rem;
  }
</style>
