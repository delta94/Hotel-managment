import { GraphQLServer } from 'graphql-yoga'

import { createTestConn } from './testUtils/createTestConn'
import { createTypeormConn } from './utils/createTypeormConn'

export const startServer = async () => {
    const typeDefs = `
    type Query {
        hello: String!
    }
    `

    const resolvers = {
        Query: {
            hello: () => `Hello`
        }
    }

    if (process.env.NODE_ENV === 'test') {
        await createTestConn(true)
    } else {
        await createTypeormConn()
    }

    const options = {
        port: 4000,
        endpoint: '/graphql'
    }

    const server = new GraphQLServer({ typeDefs, resolvers })

    const app = await server.start(options, () => console.log('Server is up'))
    return app
}
