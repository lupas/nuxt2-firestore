import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: '<replace this>',
    authDomain: '<replace this>',
    databaseURL: '<replace this>',
    projectId: '<replace this>',
    storageBucket: '<replace this>',
    messagingSenderId: '<replace this>'
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
export { fireDb }
