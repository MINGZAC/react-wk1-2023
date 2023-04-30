import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import Images from "../json/images.json";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const ImagesCollection = collection(db, "images"); 

export const feedImages = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(ImagesCollection);
  querySnapshot.forEach(async (image) => {
    await deleteDoc(doc(db, "images", image.id));
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