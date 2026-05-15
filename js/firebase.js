// FIREBASE IMPORTS

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getStorage
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


// YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyCQtwnr7kWIeLaSEiqcfIcX6sNbnnIR_lQ",
  authDomain: "nirva-designs.firebaseapp.com",
  projectId: "nirva-designs",
  storageBucket: "nirva-designs.firebasestorage.app",
  messagingSenderId: "1082532031509",
  appId: "1:1082532031509:web:32812b14c95a725ffef21c",
  measurementId: "G-79KLBS3489"
};



// INITIALIZE FIREBASE

const app =
  initializeApp(firebaseConfig);


// SERVICES

export const auth =
  getAuth(app);

export const db =
  getFirestore(app);

export const storage =
  getStorage(app);
