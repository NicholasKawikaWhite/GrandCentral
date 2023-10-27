import React, { useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc, addDoc, collection, getDocs } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.uid);
      console.log(user.displayName);
      console.log(user.email);

      const userData = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      }

      async function checkIfUserExists() {
        //const docRef = doc(collection(db, 'users'));
        //const docSnap = await getDoc(docRef);
        const querySnapshot = await getDocs(collection(db, "users"));
        let flag = false;
        querySnapshot.forEach((doc) => {
            console.log(doc.data().uid + "This is the uid from the database")
            if(doc.data().uid == user.uid) {
                flag = true;
            }
        });
        
        if (flag) { // Fix this line
            console.log(user.uid + " already exists");
        } else {
            await addDoc(collection(db, 'users'), userData); // Also fixed this line

            console.log("Yayyyyyy")
        }
    }
    
    checkIfUserExists();
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      //const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const signOutWithGoogle = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
    });
};

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <p>Hi {user.displayName}</p>
      ) : (
        <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign In
        </button>
      )}
      {user ? (
        <button
          onClick={() => {
            signOutWithGoogle();
          }}
        >
          Sign Out
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;
