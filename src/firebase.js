import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9BXlStwR58wEGl2KOhE2b7bhuIj3HprI",
  authDomain: "deepak-facebookclone.firebaseapp.com",
  projectId: "deepak-facebookclone",
  storageBucket: "deepak-facebookclone.appspot.com",
  messagingSenderId: "970430956916",
  appId: "1:970430956916:web:8b31e785620febead45821",
  measurementId: "G-W0M08K7R60",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
