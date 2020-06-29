import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCsQMET5S1eeSq87EP5FmQazTwMIS2mHfQ",
  authDomain: "vuex-firebase-demo.firebaseapp.com",
  databaseURL: "https://vuex-firebase-demo.firebaseio.com",
  projectId: "vuex-firebase-demo",
  storageBucket: "vuex-firebase-demo.appspot.com",
  messagingSenderId: "341543336640",
  appId: "1:341543336640:web:382be09ae09ed8ef554b25"
};
firebase.initializeApp(config);

export default {
  database: firebase.database()
}
