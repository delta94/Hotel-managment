import { Connection } from 'typeorm'
import { GraphQLClient } from 'graphql-request'

import { createTestConn } from '../../../testUtils/createTestConn'
import { TestClient } from '../../../utils/TestClient'

const url = process.env.TEST_HOST as string
const testClient = new TestClient(url)
let token = ''
let conn: Connection

beforeAll(async () => {
    conn = await createTestConn()

    await testClient.register('bob@bob.com', 'bobbob')
    const login: any = await testClient.login('bob@bob.com', 'bobbob')

    token = login.login.token
})

afterAll(async () => {
    conn.close()
})

describe('Create room', () => {
    it('should create room', async () => {
        const client = new GraphQLClient(url, {
            headers: {
                token
            }
        })

        const createRoomMutation = (
            roomNumber: number,
            price: number,
            people: number
        ) => `
            mutation { 
                createRoom(input: { roomNumber: ${roomNumber}, price: ${price}, people: ${people}})
            }
        `

        const response = await client.request(createRoomMutation(1, 40, 1))

        expect(response).toMatchObject({ createRoom: true })
    })
})
