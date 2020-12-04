import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAlS3pjScQjq_J72m8Ztpd9ChA90yZjf9A",
  authDomain: "e-clonings.firebaseapp.com",
  databaseURL: "https://e-clonings.firebaseio.com",
  projectId: "e-clonings",
  storageBucket: "e-clonings.appspot.com",
  messagingSenderId: "327216957797",
  appId: "1:327216957797:web:48211c2bd322ac9ea0b98c",
  measurementId: "G-3ZV9WPM39Y",
});

const auth = firebaseApp.auth();
export { auth };
