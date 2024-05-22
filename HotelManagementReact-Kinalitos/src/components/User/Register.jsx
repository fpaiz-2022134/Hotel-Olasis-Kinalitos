import { passConfirmationValidationMessage, validatePasswordConfirm } from "../../shared/validators2/confirmPass.validator.js"
import { validateText, textValidationMessage} from "../../shared/validators2/texto.validator.js"
import { validateEmail, emailValidationMessage } from "../../shared/validators2/input.validator.js"
import { passwordValidationMessage, validatePassword  } from "../../shared/validators2/password.validator.js"
import { usernameValidationMessage, validateUsername } from "../../shared/validators2/username.validator.js"
import { phoneValidationMessage, validatePhone } from "../../shared/validators2/phone.validator.js"
import { useState } from "react"
import {useRegister} from "../../shared/Hooks/User/useRegister.jsx"

import { InputUser } from "./InputUser.jsx"
import "./Register.css"

export const Register = ({ switchUserhHandler }) => {

    const { register, isLoading } = useRegister()
    const [formData, setFormData] = useState(

        {
            name: {
                value: '',
                isValid: false,
                showError: false
            },
            surname: {
                value: '',
                isValid: false,
                showError: false
            },
            email: {
                value: '',
                isValid: false,
                showError: false
            },
            username: {
                value: '',
                isValid: false,
                showError: false
            },
            phone: {
                value: '',
                isValid: false,
                showError: false
            },
            password: {
                value: '',
                isValid: false,
                showError: false
            },
            passwordConfirm: {
                value: '',
                isValid: false,
                showError: false
            }
        }
    )

    const onValueChange = (value, field) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
    }

    const handleValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'name':
                isValid = validateText(value)
                break
            case 'surname':
                isValid = validateText(value)
                break
            case 'email':
                isValid = validateEmail(value)
                break
            case 'username':
                isValid = validateUsername(value)
                break
            case 'phone':
                isValid = validatePhone(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfirm':
                isValid = validatePasswordConfirm(formData.password.value, value)
                break
            default:
                break
        }
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        register(
            formData.name.value,
            formData.surname.value,
            formData.email.value,
            formData.username.value,
            formData.phone.value,
            formData.password.value
        )
    }

    const isSubmitButtonDisable =
        !formData.name.isValid ||
        !formData.surname.isValid ||
        !formData.email.isValid ||
        !formData.username.isValid ||
        !formData.phone.isValid ||
        !formData.password.isValid ||
        !formData.passwordConfirm.isValid
    return (
        <div className="register-container">
            <h2>Sign Up</h2>
            <form className="user-form" onSubmit={handleRegister}>
                <InputUser
                    field='name'
                    label='NAME'
                    type='text'
                    value={formData.name.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.name.showError}
                    validationMessage={textValidationMessage}
                />
                <InputUser
                    field='surname'
                    label='SURNAME'
                    type='text'
                    value={formData.surname.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.surname.showError}
                    validationMessage={textValidationMessage}
                />
                <InputUser
                    field='email'
                    label='EMAIL'
                    type='text'
                    value={formData.email.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <InputUser
                    field='username'
                    label='USERNAME'
                    type='text'
                    value={formData.username.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.username.showError}
                    validationMessage={usernameValidationMessage}
                />
                <InputUser
                    field='phone'
                    label='PHONE'
                    type='phone'
                    value={formData.phone.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.phone.showError}
                    validationMessage={phoneValidationMessage}
                />
                <InputUser
                    field='password'
                    label='PASSWORD'
                    type='password'
                    value={formData.password.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <InputUser
                    field='passwordConfirm'
                    label='PASSWORD CONFIRMATION'
                    type='password'
                    value={formData.passwordConfirm.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.passwordConfirm.showError}
                    validationMessage={passConfirmationValidationMessage}
                />
                <button
                    disabled={isSubmitButtonDisable}
                >
                    Register
                </button>
            </form>
            <span className="letras" onClick={switchUserhHandler}>
                ¿Ya tienes una cuenta? ¡Inicia sesión acá!
            </span>
        </div>
    )
}