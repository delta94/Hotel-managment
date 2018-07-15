import { ValidationError } from 'yup'

export const formatYupError = (err: ValidationError) => {
    const errors: Array<{ message: string }> = []

    err.inner.forEach(e => {
        errors.push({
            message: e.message
        })
    })
    return errors
}
