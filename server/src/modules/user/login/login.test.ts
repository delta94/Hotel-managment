import { Connection } from 'typeorm'
import { request } from 'graphql-request'
import * as faker from 'faker'
import * as jwt from 'jsonwebtoken'

import { createTestConn } from '../../../testUtils/createTestConn'
import { User } from '../../../entity/User'
import { badPassword, badEmail } from './errorMessages'

faker.seed(Date.now() + 2)
const email = faker.internet.email()
const password = faker.internet.password()

const registerMutation = (e: string, p: string) => `
    mutation {
        register(email: "${e}", password: "${p}") {
            ok,
            errors {
                message
            }
        }
    }
`
const loginMutation = (e: string, p: string) => `
    mutation {
        login(email: "${e}", password: "${p}") {
            ok,
            token,
            errors {
                message
            }
        }
    }
`

let conn: Connection
beforeAll(async () => {
    conn = await createTestConn()

    await request(url, registerMutation(email, password))
})

afterAll(async () => {
    conn.close()
})

const url = process.env.TEST_HOST as string

describe('Login', () => {
    it('should login and generate token', async () => {
        const response: any = await request(url, loginMutation(email, password))

        expect(response).toMatchObject({
            login: { ok: true, errors: null }
        })

        const decodeToken: any = jwt.verify(response.login.token, process.env
            .SECRET as string)

        const user: any = await User.findOne({ where: { email } })

        expect(decodeToken.id).toEqual(user.id)
    })

    it('should not login with bad password', async () => {
        const response: any = await request(url, loginMutation(email, 'bla'))

        expect(response).toMatchObject({
            login: {
                ok: false,
                errors: [{ message: badPassword }]
            }
        })
    })

    it('should not login with bad email', async () => {
        const response: any = await request(
            url,
            loginMutation('bob@bob.com', password)
        )

        expect(response).toMatchObject({
            login: {
                ok: false,
                errors: [{ message: badEmail }]
            }
        })
    })
})
