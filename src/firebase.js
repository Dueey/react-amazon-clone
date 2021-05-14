import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8sYkk1ELdMjOauzUA6xKNIcNMR72Vv4k",
  authDomain: "react--clone-8f180.firebaseapp.com",
  projectId: "react--clone-8f180",
  storageBucket: "react--clone-8f180.appspot.com",
  messagingSenderId: "332789622133",
  appId: "1:332789622133:web:fd088b97a51b1878ea1f3c",
  measurementId: "G-88D5V0Y5CH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
