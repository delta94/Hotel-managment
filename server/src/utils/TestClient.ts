import { request } from 'graphql-request'

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

export class TestClient {
    private url: string

    public constructor(url: string) {
        this.url = url
    }

    public async register(email: string, password: string) {
        return request(this.url, registerMutation(email, password))
    }

    public async login(email: string, password: string) {
        return request(this.url, loginMutation(email, password))
    }
}
