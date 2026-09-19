import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcxyD9zA7tGcSLaxp_2Q0FDLm2KFBUh-U",
  authDomain: "saripai.firebaseapp.com",
  projectId: "saripai",
  storageBucket: "saripai.firebasestorage.app",
  messagingSenderId: "216452182229",
  appId: "1:216452182229:web:6740e54e8f4e77c689725c",
  measurementId: "G-TD4Y3HN8ZF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
