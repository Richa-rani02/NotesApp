import "./loginPanel.css";
import { initialFormValues, validateInput, testLogin } from "./helper";
import { InputField } from "../InputField/InputField";
import { useState } from "react";
export const LoginPanel = ({ active }) => {
    const [formValues, setFormValues] = useState({ ...initialFormValues });
    const [errors, setErrors] = useState({});
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
        console.log("test");
        console.log(testLogin);

        setFormValues(testLogin);
        console.log(formValues);
    }
    const loginHandler = (e) => {
        e.preventDefault();
        const err = validateInput(formValues);
        setErrors(err);
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