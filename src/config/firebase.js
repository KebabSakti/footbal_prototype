import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyAkPxiD0zW10nF67F0ytUxAqQ2I2A-xL8g",
    authDomain: "football-297d9.firebaseapp.com",
    projectId: "football-297d9",
    storageBucket: "football-297d9.appspot.com",
    messagingSenderId: "908157490493",
    appId: "1:908157490493:web:198c09222d939bc6d6e154",
    databaseURL:
      "https://football-297d9-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };

  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  return db;
}

export default initFirebase;
