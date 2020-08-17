export const required = (value) => {
    if (value) return undefined;

    return 'Field is required'
}

export const maxLengthCreator = (max) => (value) => {
    if (value && value.length > max) {
        return `Must be ${max} characters or less`
    }

    return undefined
}

export const minLengthCreator = (min) => (value) => {
    if (value && value.length < min) {
        return `Must be ${min} characters minimum`
    }

    return undefined
}
