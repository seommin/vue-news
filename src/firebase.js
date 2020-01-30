import { initializeApp } from "firebase";

const app = initializeApp({
    apiKey: "AIzaSyCbaeLDEAF9eymTCH4l-Aj9W2bNHI39u2s",
    authDomain: "vuejs-seommin.firebaseapp.com",
    databaseURL: "https://vuejs-seommin.firebaseio.com",
    projectId: "vuejs-seommin",
    storageBucket: "vuejs-seommin.appspot.com",
    messagingSenderId: "225722120941",
    appId: "1:225722120941:web:b67af5cff755937d982ae4",
    measurementId: "G-Z7N8QQLLGM"
});

export const db = app.database();