export const validateText = (name, surname)=>{
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúüÜñÑ\s]{3,20}$/
    return regex.test(name, surname)
}

export const textValidationMessage = 'Mínimo 3 máximo 20 caracteres. Se aceptan espacios, tildes y dieresis pero no caracteres especiales'