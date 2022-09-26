

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCQ-v8hm6wXE01laORhdkQfrb4yhwWxEXI",
  authDomain: "clone-3dfc7.firebaseapp.com",
  projectId: "clone-3dfc7",
  storageBucket: "clone-3dfc7.appspot.com",
  messagingSenderId: "491526036216",
  appId: "1:491526036216:web:3a051e25418e46bbb1f90d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };