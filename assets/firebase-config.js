
/* Firebase web config (safe to be public). */
var FIREBASE_CONFIG = {
  apiKey: "AIzaSyBhVun3Si7eKB05qWEqChII8P6BfNN5N3s",
  authDomain: "seoulmate-99d19.firebaseapp.com",
  projectId: "seoulmate-99d19",
  storageBucket: "seoulmate-99d19.firebasestorage.app",
  messagingSenderId: "612544315903",
  appId: "1:612544315903:web:7c0f2af9fdb5f9e33667ca"
};
/* Firebase sign-in runs on these hosts and on any *.github.io (GitHub Pages) address. Anywhere else (like this preview) uses browser-only demo accounts. */
var FIREBASE_HOSTS = ["seoulmate.travel","www.seoulmate.travel","seoulmate-99d19.web.app","seoulmate-99d19.firebaseapp.com","localhost","127.0.0.1"];
try{ if(window.firebase && !firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG); }catch(e){}
