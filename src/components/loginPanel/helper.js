export const initialFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  export const testLogin = {
    email: "test@gmail.com",
    password: "Test123@",
  };
  
  export const validateInput=(values)=>{
    const errors = {};

    const passRegex =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if(!values.email){
      errors.email = "Email is required!!";
    }else if (!emailRegex.test(values.email)) {
      errors.email = "Enter a valid emailId!!";
    }

    if (!values.password) {
      errors.password = "Password is required!!";
    }else if (!passRegex.test(values.password.trim())) {
      errors.password =
        "Password should be 6-10 characters and include at least 1 letter, 1 number and 1 special character!";
    }

    if (!values.confirmPassword || values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match !!";
    }

    return errors;
  }