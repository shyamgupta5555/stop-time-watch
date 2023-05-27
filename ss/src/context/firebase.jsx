import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyB9EeKghHJ_A06vU__uJddt9JOURtf2kfI",
  authDomain: "you-tube-app-423d4.firebaseapp.com",
  projectId: "you-tube-app-423d4",
  storageBucket: "you-tube-app-423d4.appspot.com",
  messagingSenderId: "721068052629",
  appId: "1:721068052629:web:4a88d34736480d1ae40b9c",
  databaseURL: "https://you-tube-app-423d4-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    console.log("hii")
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => {
    set(ref(database, key), data);
  };

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
