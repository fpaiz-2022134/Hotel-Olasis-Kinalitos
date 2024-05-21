export const validateUsername = (username)=>{
    const regex = /^\S{3,20}$/
    return regex.test(username)
}

export const usernameValidationMessage = 'Nombre de usuario inválido, mínimo 3 máximo 20 caracteres. No se aceptan espacios'