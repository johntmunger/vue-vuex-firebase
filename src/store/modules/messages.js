import axios from 'axios';
import firebase from '../../firebase';

const state = {
  messages: [],
  albums: []
};

const getters = {
  allMessages: (state) => state.messages,
  allAlbums: (state) => state.albums
};

const mutations = {
  setMessages: (state, messages) => (state.messages = messages),
  setAlbums: (state, albums) => (state.albums = albums)
};

const actions = {
  getMessageCollection(context) {
    firebase.database.ref('messages').on('value', function(snapshot) {
      context.commit('setMessages', snapshot.val()); 
    });
  },
  getAlbumCollection(context) {
    firebase.database.ref('messages/albums').on('value', function(snapshot) {
      context.commit('setAlbums', snapshot.val()); 
    });
  },

  // Add data to firebase using axios post 
  async addMessage({ commit }, text) {
    const response = await axios.post('https://vuex-firebase-demo.firebaseio.com/messages/albums.json', 
    { text });

    commit('setMessages', response.data);
    window.location.reload();
  },

};

export default {
  state,
  getters,
  actions,
  mutations
};