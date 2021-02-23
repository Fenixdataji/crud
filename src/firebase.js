import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRkdsQTjExR8vZYEVa3YL9ULkvw8m29rM",
    authDomain: "crud-31afa.firebaseapp.com",
    projectId: "crud-31afa",
    storageBucket: "crud-31afa.appspot.com",
    messagingSenderId: "1031343884489",
    appId: "1:1031343884489:web:6bf28d7341a4242845a518"
  }
  
  export const firebaseApp =firebase.initializeApp(firebaseConfig)