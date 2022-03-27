import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Search } from "../searchbar/Search";
import { LoginPanel } from "../loginPanel/LoginPanel";
import { useAuth } from "../../context/auth-context";
export const Header = () => {
  const [active, setactive] = useState(false);
  const{authState:{token}}=useAuth();

  return (
    <header>
      <div className="left_area">
        <label for="check">
          <GiHamburgerMenu className="hamburger-icon" />
        </label>
        <div>
          <h3>PALETTE</h3>
        </div>
      </div>

      <Search />
      <div className="right_area">
       {token?<a href="#" className="login_btn" onClick={() => setactive(prev => !prev)}>Logout</a>:<a href="#" className="login_btn" onClick={() => setactive(prev => !prev)}>Login</a> } 
      </div>
      < LoginPanel active={active} setactive={setactive} />
    </header>

  )
}