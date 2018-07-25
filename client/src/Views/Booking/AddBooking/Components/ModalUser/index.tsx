import * as React from 'react'
import * as _ from 'lodash'
import { withApollo } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'

import { Input } from 'src/Components/Input'
import { InputWrapper, UserList, UserAvatar, User, UserEmail } from './style'

interface State {
    email: string
    users: User[]
}

interface Props {
    client: ApolloClient<any>
}

interface User {
    id: number
    email: string
}

class C extends React.Component<Props, State> {
    debounce: any

    constructor(props: Props) {
        super(props)
        this.debounce = _.debounce(this.fetchUsers, 300)

        this.state = {
            email: '',
            users: Array<User>()
        }
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = async () => {
        const { email } = this.state

        const users = await this.props.client.query<any>({
            query: gql`
                {
                    users(pattern: "${email}") {
                        id,
                        email
                    }
                }
            `
        })
        this.setState({ users: users.data.users, email })
    }

    handleInput = (email: string) => {
        this.setState({ email })
        this.debounce()
    }

    render() {
        return (
            <>
                <InputWrapper>
                    <Input
                        type="text"
                        placeholder="Search for user..."
                        onChange={text => this.handleInput(text)}
                    />
                </InputWrapper>

                <UserList>
                    {this.state.users.map(user => (
                        <User key={user.id}>
                            <UserAvatar />
                            <UserEmail>{user.email}</UserEmail>
                        </User>
                    ))}
                </UserList>
            </>
        )
    }
}

export const ModalUser = withApollo(C)
