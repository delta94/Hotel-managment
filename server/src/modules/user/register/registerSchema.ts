import * as yup from 'yup'
import {
    emailNotLongEnough,
    invalidEmail,
    passwordNotLongEnough
} from './errorMessages'

export const RegisterSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, emailNotLongEnough)
        .max(255)
        .email(invalidEmail),
    password: yup
        .string()
        .min(3, passwordNotLongEnough)
        .max(255)
})
