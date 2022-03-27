import "./loginPanel.css";
import { initialFormValues, validateInput, testLogin } from "./helper";
import { InputField } from "../InputField/InputField";
import { useState } from "react";
import { loginToServer } from "../../utils/authUtils/getDatafromServer";
import { useAuth } from "../../context/auth-context";
import { toast} from 'react-toastify';

export const LoginPanel = ({ active,setactive }) => {
    const [formValues, setFormValues] = useState({ ...initialFormValues });
    const [errors, setErrors] = useState({});
    const {authDispatch}=useAuth();
    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: errors.email,
            label: "Email",
            value: formValues.email,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: errors.password,
            label: "Password",
            value: formValues.password,

        },
    ];

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    const loginWithTest = (e) => {
        e.preventDefault();
        setFormValues(testLogin);
        loginToServer(
            testLogin,
            authDispatch,toast
        );
        setFormValues(initialFormValues);
        setactive(!active);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        const err = validateInput(formValues);
        setErrors(err);
        if(Object.keys(err).length === 0){
            loginToServer(
                formValues,
                authDispatch,toast
            );
            setFormValues(initialFormValues);
            setactive(!active);
        }
    }

    return (
        <>
            <form className={`login-form ${active && 'active'}`}>
                <h3>login</h3>
                {inputs.map((input) => (
                    <InputField key={input.id}
                        {...input}
                        onChange={handleChange} />
                ))}
                <p className="top-gutter-sm">Forget your password <a href="#">click here</a></p>
                <p>Don't have an account <a href="#">create now</a></p>

                <button onClick={loginWithTest} className="btn"> LOGIN WITH TEST CREDENTIALS </button>
                <button onClick={loginHandler} className="btn">LOGIN </button>
            </form>
        </>
    )
}