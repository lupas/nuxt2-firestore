import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: '<replace this>',
    authDomain: '<replace this>',
    databaseURL: '<replace this>',
    projectId: '<replace this>',
    storageBucket: '<replace this>',
    messagingSenderId: '<replace this>',
    appId: '<replace this>',
    measurementId: '<replace this>',
    fcmPublicVapidKey: '<replace this>'
  }
  firebase.initializeApp(config)
  firebase.firestore()
}
const fireDb = firebase.firestore()
export { fireDb }
