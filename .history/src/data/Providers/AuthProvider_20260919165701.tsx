import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

const auth = getAuth();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;