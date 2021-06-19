import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB8K7ly4j9inNooSXwm4cWKwabVe9iPtCc",
    authDomain: "story-hub-4c79f.firebaseapp.com",
    projectId: "story-hub-4c79f",
    storageBucket: "story-hub-4c79f.appspot.com",
    messagingSenderId: "928114166305",
    appId: "1:928114166305:web:4ca424ef6f253d3c10b160"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();