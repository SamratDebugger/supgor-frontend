// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "amar-dokan-revision.firebaseapp.com",
  projectId: "amar-dokan-revision",
  storageBucket: "amar-dokan-revision.firebasestorage.app",
  messagingSenderId: "748987585787",
  appId: "1:748987585787:web:0ef0d59c9afb62d4c7cc5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
