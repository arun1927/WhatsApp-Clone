import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAIwFOk7X9TVOtMypNQ9dmFDE2ASjJpMj8",
  authDomain: "whatsapp-51c6d.firebaseapp.com",
  databaseURL: "https://whatsapp-51c6d.firebaseio.com",
  projectId: "whatsapp-51c6d",
  storageBucket: "whatsapp-51c6d.appspot.com",
  messagingSenderId: "152872210935",
  appId: "1:152872210935:web:92a662899d48ad30019ef2",
  measurementId: "G-DDBS1389F4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;