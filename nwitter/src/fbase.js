import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARP_s8qnJf9p4_c378HDwb3ppCBcwAb8s",
  authDomain: "kwitter-f4bd0.firebaseapp.com",
  projectId: "kwitter-f4bd0",
  storageBucket: "kwitter-f4bd0.appspot.com",
  messagingSenderId: "584021454171",
  appId: "1:584021454171:web:f0d7ae0109d554a47e7e7e",
};
export default firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
