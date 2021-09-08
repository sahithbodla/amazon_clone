// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBm5OzGGVfNeyKycFr-FAV9fpX5K57Tv8Y",
  authDomain: "clone-c55bf.firebaseapp.com",
  projectId: "clone-c55bf",
  storageBucket: "clone-c55bf.appspot.com",
  messagingSenderId: "154527213377",
  appId: "1:154527213377:web:3076fbcaf47fc840ace3c0",
  measurementId: "G-C8TC1K9YVH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};