import { createContext,useContext } from "react";


const AuthContext=createContext({});

const AuthProvider=({children})=>{

    const getToken=localStorage.getItem("notesToken");
    


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=()=>useContext(AuthContext);
export {AuthProvider}