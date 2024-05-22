import { useState } from "react";
import { InputUser } from "./InputUser.jsx";
import { validateEmail, emailValidationMessage } from "../../shared/validators2/input.validator.js";
import { passwordValidationMessage, validatePassword } from "../../shared/validators2/password.validator.js";

import "./Login.css";

import { useLogin } from "../../shared/Hooks/User/useLogin.jsx";

import logo from "../../assets/logo.png";

export const Login = ({ switchUserhHandler }) => {
  const { login, isLoading } = useLogin(false);
  const [formData, setFormData] = useState({
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    }
  });

  const onValueChange = (value, field) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        value
      }
    }));
  };

  const handleValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case 'email':
        isValid = validateEmail(value);
        break;
      case 'password':
        isValid = validatePassword(value);
        break;
      default:
        break;
    }

    setFormData(prevData => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        isValid,
        showError: !isValid
      }
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    login(formData.email.value, formData.password.value);
  };

  const isSubmitButtonDisable = !formData.email.isValid || !formData.password.isValid;

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form className="user-form" onSubmit={handleLogin}>
          <InputUser
            field='email'
            label='Email'
            type='text'
            value={formData.email.value}
            onChangeHandler={onValueChange}
            onBlurHandler={handleValidationOnBlur}
            showErrorMessage={formData.email.showError}
            validationMessage={emailValidationMessage}
          />
          <InputUser
            field='password'
            label='Password'
            type='password'
            value={formData.password.value}
            onChangeHandler={onValueChange}
            onBlurHandler={handleValidationOnBlur}
            showErrorMessage={formData.password.showError}
            validationMessage={passwordValidationMessage}
          />
          <button disabled={isSubmitButtonDisable}>
            Iniciar sesión
          </button>
        </form>
        <span className="letras" onClick={switchUserhHandler}>
          ¿No tienes cuenta? ¡Registrate acá!
        </span>
      </div>
      <div className="hotel-image">
        <img src={logo} alt="Hotel" />
      </div>
    </div>
  );
};