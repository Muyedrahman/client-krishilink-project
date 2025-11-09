// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO5phXkqVBoLoegd0MNeSkt_9F9zyAC6M",
  authDomain: "fir-krishi-project.firebaseapp.com",
  projectId: "fir-krishi-project",
  storageBucket: "fir-krishi-project.firebasestorage.app",
  messagingSenderId: "862519320055",
  appId: "1:862519320055:web:d3dfc8cc073e3053f562f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
