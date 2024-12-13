// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase config object (replace with your actual config from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyBNhtOqWeoz9CdPjkCAoENFXTLfv8eSl6Y",
    authDomain: "mystudyapp-662b7.firebaseapp.com",
    projectId: "mystudyapp-662b7",
    storageBucket: "mystudyapp-662b7.firebasestorage.app",
    messagingSenderId: "711098897934",
    appId: "1:711098897934:web:a88bfc5cd327383314ce5f",
    measurementId: "G-KELCJRL2CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
