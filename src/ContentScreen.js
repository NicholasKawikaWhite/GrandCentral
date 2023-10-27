import React, {useState, useEffect} from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";



const ContentScreen = () => {
const [user, setUser] = useState(null);
useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
        if (authUser){
            setUser(authUser);
        }else {
            setUser(null);
        }
    })
}, [])



    return ( 
<>

</>

     );
}
 
export default ContentScreen;