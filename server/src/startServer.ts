import { GraphQLServer } from 'graphql-yoga'

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

    const options = {
        port: 4000,
        endpoint: '/graphql'
    }

    const server = new GraphQLServer({ typeDefs, resolvers })

    server.start(options, () => console.log('Server is up'))
}
