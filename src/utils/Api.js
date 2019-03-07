/* eslint-disable no-unused-vars */
import firebase from 'firebase'

const API = {
  auth: {
    signIn: (email, password) => {
      return firebase.auth().signInWithEmailAndPassword(email, password)
    },

    createUser: (email, password) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
    }
  }
}

export default API
