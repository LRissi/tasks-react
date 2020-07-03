import * as firebase from 'firebase';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyB9C7uvW7VooUnH5SlzQuAFoWKTVNwue8Q",
  authDomain: "trello-cc993.firebaseapp.com",
  databaseURL: "https://trello-cc993.firebaseio.com",
  projectId: "trello-cc993",
  storageBucket: "trello-cc993.appspot.com",
  messagingSenderId: "215649968303",
  appId: "1:215649968303:web:3dc324eaa2ebfe3612b45a",
  measurementId: "G-NJ608RSD79"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const database = firebase.firestore();