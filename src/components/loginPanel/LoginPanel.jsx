import "./loginPanel.css";
export const LoginPanel=({active})=>{
    return(
        <>
        <form action="" className={`login-form ${active && 'active'}`}>
        <h3>login</h3>
        <input type="email" placeholder="Enter your email" className="box"/>
        <input type="password" placeholder="Enter your password" className="box"/>
        <p>Forget your password <a href="#">click here</a></p>
        <p>Don't have an account <a href="#">create now</a></p>
        <button  className="btn">LOGIN </button>
        <button  className="btn">LOGIN WITH TEST CREDENTIAL </button>
    </form>
        </>
    )
}