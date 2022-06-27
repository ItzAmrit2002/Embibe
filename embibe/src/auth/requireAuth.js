import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const RequireAuth = ({children}) => {
    const navigate = useNavigate()
    navigate('/login', {replace: true})
    const {auth} = useAuth()
    console.log("auth", auth)
    console.log(auth.email)
    
         
    

    return children;
}