import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState, type ReactNode } from "react";
import { app } from '../firebase/firebase.config'

const auth = getAuth(app);

interface AuthProviderProps {
    children: ReactNode;
 
}
 
interface formInput {
    email: string
    password: string
}

interface AuthContextType {
    user: any;
    loading: boolean;
    createUser: (email: string, password: string) => Promise<any>;
}

export const AuthContext= createContext(null)

const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);


        const authInfo = {
            user,
            loading
        }
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;