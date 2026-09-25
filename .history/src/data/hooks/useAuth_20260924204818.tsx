import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export function useAuth(){
    const context= useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an authprovider");
    }
    return context;
}