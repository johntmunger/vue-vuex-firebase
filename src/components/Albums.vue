<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="album in returnObj" :key="album.id">
          <div class="card mb-4 shadow-sm">
            <img :src="require(`../assets/thumbnails/${album.name}.jpg`)" :alt="`${album.name}`" class="bd-placeholder-img card-img-top" width="50%" height="50%" >
            <div class="card-body">
              <p class="card-text">{{ album.name }}</p>
              <p class="card-text">{{ album.text }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                </div>
                <!-- TODO:: Add Update functionality to the UI -->
                <small class="text-muted">
                  <button type="button" class="btn btn-sm btn-outline-secondary" v-on:click.prevent="deleteRecord(album.id)">Update</button>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: "Albums",
  data() {
    return {
      post: {},
      returnObj: {}
    }
  },
  computed: {
    ...mapGetters(['allAlbums'])
  },
  methods: {
    ...mapActions(['getAlbumCollection']),

    postRecord: function() {
      axios.post('https://vuex-firebase-demo.firebaseio.com/messages/albums.json', this.post).then(response => {
        console.log(response.config);
        window.location.reload();
      }).catch((err) => console.log(err));
    },

    deleteRecord: function(id) {
      axios.delete(`https://vuex-firebase-demo.firebaseio.com/messages/albums/${id}`+ '.json').then(response => {
        console.log(response.config);
        window.location.reload();
      }).catch((err) => console.log(err));
    }
  },
  created: function () {
    // this.$store.dispatch('getAlbumCollection');
    axios.get('https://vuex-firebase-demo.firebaseio.com/messages/albums.json').then(response => {
      const collectionArray = [];
      for (let key in response.data) {
        response.data[key].id = key
        collectionArray.push(response.data[key]);
      }
      const data = Object.values(collectionArray);
      this.returnObj = data;
    }).catch((err) => console.log(err));
  }
}
</script>

<style scoped>
  .container {
    background: #343a40;
    padding: 33px 17px 10px 17px;
  }
  .album {
    width: 75%;
    margin: 0 auto;
  }
  .pb-5, .py-5 {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
  }
  .row {
    margin-right: 0;
    margin-left: 0;
  }
</style>

