import "./InputField.css";
import { useState } from "react";
export const InputField = (props) => {
    const { label, errorMessage, id, ...others } = props;

    return (
        <div className="input-form-login flex-col top-gutter-md">
            <label class="input-form-label">{label}</label>
            <input
                {...others}
                className="input-box" />
            <span>{errorMessage}</span>
        </div>
    )
}