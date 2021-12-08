import React, { createContext, useEffect, useState } from "react";
import AsyncStore from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import { Alert } from "react-native";

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
        console.log(response); 

        if(response !==  undefined) {
            setUser(response.user);
        } else { Alert.alert("Não foi possivel logar", "Usuario ou senha não encontrado",
            [ { text: "OK", onPress: () => console.log("OK Pressed") } ])
        }  
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