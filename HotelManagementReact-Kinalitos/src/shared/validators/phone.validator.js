export const validatePhone = (phone) => {
    const regex = /^[0-9]{8}$/
    return regex.test(phone)
}

export const phoneValidationMessage = 'Número de teléfono inválido. Debe contener exactamente 8 dígitos'