import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


  var firebaseConfig = {
    apiKey: "AIzaSyDNkUDqDBjf2E1YrDVyvyWYeF55vjpZU3k",
    authDomain: "discord-clone-c6aed.firebaseapp.com",
    projectId: "discord-clone-c6aed",
    storageBucket: "discord-clone-c6aed.appspot.com",
    messagingSenderId: "816165964930",
    appId: "1:816165964930:web:2ff91b5f8eb62508e4389b",
    measurementId: "G-YWFV8570GR"


  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  //const storage = getStorage(app);

  const provider = new GoogleAuthProvider();
  
  export { auth, provider};
  export default db;