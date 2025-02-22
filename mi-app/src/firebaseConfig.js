import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH5L7Wzh3GnGgbsGmQIY86CeAnP_1il60",
  authDomain: "mi-app-a3820.firebaseapp.com",
  projectId: "mi-app-a3820",
  storageBucket: "mi-app-a3820.appspot.com", // 🔹 Corrección en el dominio
  messagingSenderId: "67913847966",
  appId: "1:67913847966:web:77c5c5438a3ce9b8d9978f",
  measurementId: "G-3ZSPNMX741"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
