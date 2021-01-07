import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBasF5_ywWYhVJXrMw19QmZXRd8Uc7Zns0",
        authDomain: "nuxt-firebase-practice-12fd1.firebaseapp.com",
        projectId: "nuxt-firebase-practice-12fd1",
        storageBucket: "nuxt-firebase-practice-12fd1.appspot.com",
        messagingSenderId: "217049724610",
        appId: "1:217049724610:web:ffd51ac13eaf8c9af6ed5b"
      }
    )
  }
  
  export default firebase