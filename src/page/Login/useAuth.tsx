import {  createContext, PropsWithChildren, ReactNode, useContext, useReducer } from "react"

interface Authorization {
    logged: boolean,
    token: string | null,
    logout : () => void;
    login : (token : string) => void;
}
interface AuthState{
    logged: boolean,
    token: string | null,
}

type AuthAction = {
    type: "login";
    token: string
} | {type: "logout"}

const AuthContext = createContext<Authorization | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within a authProvider")
    }

    return context;
}

const initialState : AuthState = {
    logged : false ,
    token : null
};

const authReducer = (state : AuthState , action : AuthAction) : AuthState => {
    if (action.type === "login"){
        return { ...state, logged: true , token : action.token}
    }else if(action.type === "logout"){
        return {...state, logged: false , token : null}
    }else{
        return state
    }
}


export const AuthProvider = ({children} : {children : ReactNode}) => {

    const [state, setState] = useReducer(authReducer , initialState);

    const login = (token : string) => {
        setState( {type : "login" , token : token});
    }

    const logout = () => {
        setState({type: "logout"});
    }


    const authorization : Authorization = {...state , login , logout};


    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    )
}