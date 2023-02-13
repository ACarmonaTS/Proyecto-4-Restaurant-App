// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACd837S7VMkbM9UGrQugtFFKS_NIQrMow",
  authDomain: "proyectocuatro-3dbf6.firebaseapp.com",
  projectId: "proyectocuatro-3dbf6",
  storageBucket: "proyectocuatro-3dbf6.appspot.com",
  messagingSenderId: "314370619113",
  appId: "1:314370619113:web:c35f0c2ec01eefea916278"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Exporta la funcionalidad de la base de datos
const db = getFirestore(app)
// Exporta el paquete firebase para otros usos
export { db }