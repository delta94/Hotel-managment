import { GraphQLServer } from 'graphql-yoga'
import * as jwt from 'jsonwebtoken'

import { generateSchema } from './utils/generateSchema'
import { createTypeormConn } from './utils/createTypeormConn'
import { createTestConn } from './testUtils/createTestConn'

const addUser = (req: any, _: any, next: any) => {
    const token = req.headers.token
    const SECRET = process.env.SECRET as string
    if (token) {
        const user = jwt.verify(token, SECRET)
        req.user = user
    }
    next()
}

export const startServer = async () => {
    const server = new GraphQLServer({
        schema: generateSchema(),
        context: (req: any) => {
            if (req.request.user) {
                return {
                    userId: req.request.user.id
                }
            }
            return
        }
    })

    server.use(addUser)

    if (process.env.NODE_ENV === 'test') {
        await createTestConn(true)
    } else {
        await createTypeormConn()
    }

    const options = {
        port: process.env.NODE_ENV === 'test' ? 0 : 4000,
        endpoint: '/graphql',
        cors: {
            origin: '*'
        }
    }

    const app = await server.start(options)
    console.log('Server is running on localhost:4000')

    return app
}
