import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '../firebase';
import messages from './modules/messages';

Vue.use(Vuex);
Vue.use(firebase);

export const store = new Vuex.Store({
  modules: {
    messages
  }
});
