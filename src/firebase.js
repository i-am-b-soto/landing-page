import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrPuJQ_UQELe-yRaFwnBAcC7e940k3sq8",
    authDomain: "landing-page-1db57.firebaseapp.com",
    projectId: "landing-page-1db57",
    storageBucket: "landing-page-1db57.firebasestorage.app",
    messagingSenderId: "147591037887",
    appId: "1:147591037887:web:4d6797c09096744d3ad70a",
    measurementId: "G-FPZWTZSSZE"
  };
  
  console.log(" ✅ App rendered");

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  //const analytics = getAnalytics(app);

  export { db };