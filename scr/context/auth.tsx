import React, { createContext, useState } from "react";
import * as auth from '../services/auth';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(user: object | null): Promise<void>;
    signOut(): void;

}
const  AuthContext = createContext<AuthContextData | null>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => { 
    const [user, setUser] = useState<object | null>(null);

    async function signIn(userSingIn) {
        const response = await auth.signIn(userSingIn);
        setUser(response.user);
    }

    function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    );   
};

export default AuthContext;