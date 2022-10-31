import firebase from 'firebase/compat/app' ;
import 'firebase/compat/firestore';

const firebaseApp ={
  apiKey: "AIzaSyCMSfcLR6JTh9SvKxMGeqT_X8YFK0mSFKY",
  authDomain: "todo-app-f18d8.firebaseapp.com",
  projectId: "todo-app-f18d8",
  storageBucket: "todo-app-f18d8.appspot.com",
  messagingSenderId: "119235434766",
  appId: "1:119235434766:web:e917693771906535e0df5f",
  measurementId: "G-2FT79NM9P5",
};

firebase.initializeApp(firebaseApp);

 const db = firebase.firestore();
 export default db