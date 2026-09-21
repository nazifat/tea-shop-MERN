import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth();


const AuthProvider = () => {

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;