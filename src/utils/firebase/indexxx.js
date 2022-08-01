import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBfU4F2Q1oMg_rZ9IRVeeLv9qfB61fcSbs',
  authDomain: 'AIzaSyBfU4F2Q1oMg_rZ9IRVeeLv9qfB61fcSbs',
  projectId: 'mystore-auth-dev',
  storageBucket: 'mystore-auth-dev.appspot.com',
  messagingSenderId: '1006557668485',
  appId: '1:1006557668485:web:85ef0dc5c894ae4996f5ec'
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}