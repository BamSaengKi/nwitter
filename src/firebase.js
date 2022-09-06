import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAmtSDvJEPD5s7pJxgi41NEWfHCj9V2lq0",
    authDomain: "nwitter-1a3aa.firebaseapp.com",
    projectId: "nwitter-1a3aa",
    storageBucket: "nwitter-1a3aa.appspot.com", 
    messagingSenderId: "1073937363880",
    appId: "1:1073937363880:web:40bedee9ed5e279765e39d"
  };

  export default firebase.initializeApp(firebaseConfig);