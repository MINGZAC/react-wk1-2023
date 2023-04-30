import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import Images from "../json/products.json";

const firebaseConfig = {
    apiKey: "AIzaSyBe5vVm6vAxtbWBIjmwFKTfdJAy5ZOmmvQ",
    authDomain: "react-wk1-a9b1d.firebaseapp.com",
    projectId: "react-wk1-a9b1d",
    storageBucket: "react-wk1-a9b1d.appspot.com",
    messagingSenderId: "1010831761356",
    appId: "1:1010831761356:web:1e92c95c689c52116e4769",
    measurementId: "G-CYWGYBNHFT"
  };

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const ImagesCollection = collection(db, "products"); 

export const feedImages = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(ImagesCollection);
  querySnapshot.forEach(async (image) => {
    await deleteDoc(doc(db, "products", image.id));
  });
  // ADD NEW DOCS
  Images.forEach(async (image) => {
    const docRef = await doc(ImagesCollection);
    await setDoc(docRef, { ...image, id: docRef.id });
  });
};

export const getImages = async () => {
    const querySnapshot = await getDocs(ImagesCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (image) => {
       await result.push(image.data());
    });
    console.log({ result });
    return result
 };