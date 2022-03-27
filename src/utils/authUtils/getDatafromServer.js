import axios from "axios";
import { loginUrl} from "../apiUrl";
import { authActions } from "../../constants/authConstant";


export const loginToServer=async(userDetails,authDispatch,toast)=>{

    try{
       const response=await axios.post(loginUrl,{
           email:userDetails.email,
           password:userDetails.password
       });

      if(response.status===200){
          localStorage.setItem("notesToken",response.data.encodedToken);
          toast.success("You are now logged in !");
          authDispatch({type:authActions.TOKEN,payload:response.data.encodedToken})
          authDispatch({type:authActions.LOAD_USER,payload:response.data.foundUser})
         
      }
    } catch(error){
        toast.error("Error in login");
        authDispatch({type:authActions.ERROR,payload:"Error in login"});
        
    }
}