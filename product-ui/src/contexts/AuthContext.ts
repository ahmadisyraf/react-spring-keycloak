import {createContext} from "react";

interface AuthContextType {
    token: string | null | undefined;
}

export const AuthContext = createContext<AuthContextType>({
    token: null,
});