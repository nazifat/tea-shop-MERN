import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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
    createUser: (email: string, password: string) => Promise<void>; 
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);

    }


    const authInfo = {
        user,
        loading,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;