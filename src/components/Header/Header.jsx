import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import {Search} from "../searchbar/Search";
import { LoginPanel } from "../loginPanel/LoginPanel";
export const Header = () => {
    const [active,setactive]=useState(false);
    const [formvalues, setFormValues] = useState({
        email: "",
        password: "",
        confirmPassword: ""
      });
    return (
      <header>
        <div className="left_area">
        <label for="check">
      <GiHamburgerMenu className="hamburger-icon"/>
      </label>
      <div>
      {/* <img className="logo"
          src="https://res.cloudinary.com/dgomw715r/image/upload/v1648184197/ProjectImages/noteslogo_qenwcd.png"
          alt="logo"
        /> */}
        <h3>NOTELY</h3>
      </div>
        </div>

            <Search/>
      <div className="right_area">
        <a href="#" className="login_btn" onClick={()=>setactive(prev=>!prev)}>Login</a>
      </div>
       < LoginPanel active={active} />
    </header>
       
    )
}