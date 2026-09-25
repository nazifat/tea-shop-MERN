import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useState, type ReactNode } from "react";
import { app } from '../firebase/firebase.config'
import type { User } from "firebase/auth/web-extension";

const auth = getAuth(app);

interface AuthProviderProps {
    children: ReactNode;

}


interface AuthContextType {
    user: User | null;
    loading: boolean;
    // createUser: any;
    createUser: (email: string, password: string) => Promise<any>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signIn = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name:string, photo: string)=>{
        console.log(auth.currentUser);
        return updateProfile(auth.currentUser | null, {
            displaName: name,
            photoURL: photo
        })
    }
 
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;