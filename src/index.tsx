import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import 'antd';

import Router from "./router";




//import i18n from "./translation";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(" ✅ App rendered");

const App = () => (
  <BrowserRouter>
      <Router />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
