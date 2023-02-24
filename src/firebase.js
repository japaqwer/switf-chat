// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyACstuj_upo1bCBxL947ALUpkJ0u9cvno8",
    authDomain: "video-f2e7f.firebaseapp.com",
    databaseURL: "https://video-f2e7f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "video-f2e7f",
    storageBucket: "video-f2e7f.appspot.com",
    messagingSenderId: "104180345570",
    appId: "1:104180345570:web:b59896814be5c3c2a88cbb",
    measurementId: "G-1VEKL0JBV0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;