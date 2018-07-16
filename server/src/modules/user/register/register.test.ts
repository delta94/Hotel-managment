import { Connection } from 'typeorm'
import { request } from 'graphql-request'
import * as faker from 'faker'

import { createTestConn } from '../../../testUtils/createTestConn'
import {
    duplicateEmail,
    invalidEmail,
    emailNotLongEnough,
    passwordNotLongEnough
} from './errorMessages'
import { User } from '../../../entity/User'

let conn: Connection
beforeEach(async () => {
    conn = await createTestConn(true)
})

afterEach(async () => {
    await conn.close()
})

const url = process.env.TEST_HOST as string

faker.seed(Date.now() + 1)
const email = faker.internet.email()
const password = faker.internet.password()

const mutation = (e: string, p: string) => `
    mutation {
        register(email: "${e}", password: "${p}") {
            ok,
            errors {
                message
            }
        }
    }
`

describe('Register', () => {
    it('should register correctly', async () => {
        const response = await request(url, mutation(email, password))

        expect(response).toMatchObject({ register: { ok: true, errors: null } })

        const user: any = await User.findOne({ where: { email } })

        expect(user.email).toEqual(email)
        expect(user.password).not.toEqual(password)
    })

    it('check for duplicate email', async () => {
        await request(url, mutation(email, password))
        const response = await request(url, mutation(email, password))

        expect(response).toMatchObject({
            register: { ok: false, errors: [{ message: duplicateEmail }] }
        })

        const user: any = await User.find({ where: { email } })

        expect(user).toHaveLength(1)
    })

    it('check for bad email', async () => {
        const response = await request(url, mutation('bo', password))

        expect(response).toMatchObject({
            register: {
                ok: false,
                errors: [
                    { message: emailNotLongEnough },
                    { message: invalidEmail }
                ]
            }
        })

        const user: any = await User.find({ where: { email } })

        expect(user).toHaveLength(0)
    })

    it('check for bad password', async () => {
        const response = await request(url, mutation(email, 'bo'))

        expect(response).toMatchObject({
            register: {
                ok: false,
                errors: [{ message: passwordNotLongEnough }]
            }
        })

        const user: any = await User.find({ where: { email } })

        expect(user).toHaveLength(0)
    })

    it('check for bad email and password', async () => {
        const response = await request(url, mutation('bo', 'bo'))

        expect(response).toMatchObject({
            register: {
                ok: false,
                errors: [
                    { message: emailNotLongEnough },
                    { message: invalidEmail },
                    { message: passwordNotLongEnough }
                ]
            }
        })

        const user: any = await User.find({ where: { email } })

        expect(user).toHaveLength(0)
    })
})
