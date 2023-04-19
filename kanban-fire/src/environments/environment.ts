

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvSxqGUjMTGl8rEX19qnog-mFACWcy9Vw",
  authDomain: "kanbanfire-363c6.firebaseapp.com",
  databaseURL: "https://kanbanfire-363c6-default-rtdb.firebaseio.com",
  projectId: "kanbanfire-363c6",
  storageBucket: "kanbanfire-363c6.appspot.com",
  messagingSenderId: "528560232281",
  appId: "1:528560232281:web:f9e8a514d77f6204c3de48",
  measurementId: "G-G68WR5YK36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const environment = {
  production: false,
  firebase: {
    projectId: 'kanbanfire-363c6',
    appId: '1:528560232281:web:f9e8a514d77f6204c3de48',
    databaseURL: 'https://kanbanfire-363c6-default-rtdb.firebaseio.com',
    storageBucket: 'kanbanfire-363c6.appspot.com',
    apiKey: 'AIzaSyBvSxqGUjMTGl8rEX19qnog-mFACWcy9Vw',
    authDomain: 'kanbanfire-363c6.firebaseapp.com',
    messagingSenderId: '528560232281',
    measurementId: 'G-G68WR5YK36',
  }
};