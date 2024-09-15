// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUq3e2ozYYLZZhz1AEAwlt_DAT18VbZv0",
  authDomain: "corporaciondinamicagral.firebaseapp.com",
  databaseURL: "https://corporaciondinamicagral-default-rtdb.firebaseio.com",
  projectId: "corporaciondinamicagral",
  storageBucket: "corporaciondinamicagral.appspot.com",
  messagingSenderId: "268799412703",
  appId: "1:268799412703:web:34b9f2e87be3ef79f15c6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const client_auth = getAuth(app);
export const client_fbdb = getFirestore(app);