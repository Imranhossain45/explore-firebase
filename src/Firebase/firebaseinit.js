import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOIyD1BOpjmB2YV8w5IS8L9PCL8sXVzAA",
  authDomain: "fir-explore-cb175.firebaseapp.com",
  projectId: "fir-explore-cb175",
  storageBucket: "fir-explore-cb175.firebasestorage.app",
  messagingSenderId: "123493768910",
  appId: "1:123493768910:web:7d5ef658995d0d81acba9f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
