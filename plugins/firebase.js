import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDa-YwgWTp2GDyVYEfv-XLb62100_HoEvU',
    authDomain: 'nuxt-fire-demo.firebaseapp.com',
    databaseURL: 'https://nuxt-fire-demo.firebaseio.com',
    projectId: 'nuxt-fire-demo',
    storageBucket: 'nuxt-fire-demo.appspot.com',
    messagingSenderId: '807370470428',
    appId: '1:807370470428:web:26da98c86c3fd352',
    measurementId: 'G-XT6PVC1D4X',
    fcmPublicVapidKey:
      'BL_xoiuOe5vbb2vJkCNnuswn03NwCsyCkJUgRbuQA5tpg7J4E4z50MO8b-wrrad6fcysYAaFjHqU7D9o0oCWL8w'
    }
  firebase.initializeApp(config)
  firebase.firestore()
}

// TODO: THIS THROWS AN ERROR!
const fireDb = firebase.firestore()
fireDb.settings({
  host: 'localhost:8080',
  ssl: false
})

/** Same behaviour: */
// const fireDb = firebase.firestore().settings({
//   host: 'localhost:8080',
//   ssl: false
// })

export { fireDb }
