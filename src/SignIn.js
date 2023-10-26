import React, { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
    
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
      };

      const signOutWithGoogle = () => {
        signOut(auth)
          .then(() => {
    
          })
          .catch((error) => {
            // An error happened.
          });
      };

const Login = () => {

    const [user, setUser] = useState(null)

    useEffect(() =>{
      onAuthStateChanged(auth, (authUser) =>{
        if(authUser){
          setUser(authUser);
          
        }else{
          setUser(null);
        }
      })
    }, [])


    return ( 
<>
{user ? <p>Hi {user.displayName}</p> : <button onClick={() => {signInWithGoogle()}}>Sign In</button>}
{user ? <button onClick={() => {signOutWithGoogle()}}>Sign Out</button> : <></>}

</>

     );
}
 
export default Login;