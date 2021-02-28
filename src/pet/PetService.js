import 'firebase/firestore'
import * as firebase from 'firebase'
import {firebaseApp} from 'firebase/firebaseApp'

const db = firebase.firestore(firebaseApp)

const PETS_COLLECTION = 'pets'

export class PetService {
  static loadAllPets() {
    return db
      .collection(PETS_COLLECTION)
      .get()
      .then(snapshot => snapshot.docs)
      .then(docs => docs.map(doc => ({...doc.data(), id: doc.id})))
  }

  static register(pet) {
    return db
      .collection(PETS_COLLECTION)
      .add(pet)
      .then(doc => ({...pet, id: doc.id}))
  }

  static update(pet) {
    return db
      .collection(PETS_COLLECTION)
      .doc(pet.id)
      .update(pet)
      .then(() => pet)
  }

  static delete(pet) {
    return db
      .collection(PETS_COLLECTION)
      .doc(pet.id)
      .delete()
      .then(() => pet)
  }
}
